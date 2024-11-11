import styles from "./test.module.css";
import PageCardContent from "../card-content/page-card-content";
import PageCardFooter from "../card-footer/page-card-footer";
import PageCardHeader from "../card-header/page-card-header";
import PageCard from "../card/page-card";
import { useEffect, useRef, useState } from "react";
import CardCreateForm from "../card-create-form/card-create-form";
import { useParams } from "react-router-dom";
import {
    addCardApi,
    cardDeleteApi,
    cardUpdateApi,
    getCountriesApi,
} from "@/api/countries";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useSearchParams } from "react-router-dom";

const CardPageSectionTest: React.FC = () => {
    const [cardList, setCardList] = useState<Card[]>([]);
    const { lang } = useParams<{ lang: "en" | "ge" }>();
    const [cardValidationErrMsg, setCardValidationErrMsg] = useState("");
    const selectedLang = lang || "en";
    const [editableCard, setEditableCard] = useState<Card | null>(null);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const formRef = useRef<HTMLDivElement | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    interface Card {
        id: string;
        name: string;
        nameGe: string;
        population: number;
        capital: string;
        capitalGe: string;
        image: string;
        vote: number;
    }

    const sortOrder = (searchParams.get("sortOrder") || "asc") as
        | "asc"
        | "desc";

    const { data, isLoading, isError, refetch } = useQuery<Card[]>({
        queryKey: ["countries-list", sortOrder],
        queryFn: () => getCountriesApi({ _order: sortOrder }),
        retry: 0,
    });
    useEffect(() => {
        if (Array.isArray(data)) {
            setCardList(data);
        }
    }, [data]);
    console.log(data, isLoading, isError);

    const rowVirtualizer = useVirtualizer({
        count: cardList.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 80,
        overscan: 90,
    });
    const { mutate } = useMutation({ mutationFn: cardDeleteApi });
    const handleCardVote = async (id: string) => {
        const updatedCard = cardList.find((card) => card.id === id);
        if (updatedCard) {
            const updatedData = { ...updatedCard, vote: updatedCard.vote + 1 };
            try {
                await cardUpdateApi(updatedData);
                refetch();
            } catch (error) {
                console.error("Error updating card:", error);
                throw new Error("error");
            }
        }
    };

    const handleCardsSort = (sortType: "asc" | "desc") => {
        setSearchParams({ sortOrder: sortType });
        refetch();
    };

    const handleCardCreate = (cardFields: {
        name: string;
        nameGe: string;
        population: number;
        capital: string;
        capitalGe: string;
        image: string;
    }) => {
        // Validation
        if (cardFields.name.length > 20) {
            return setCardValidationErrMsg(
                "Country name should contain less than 20 characters",
            );
        } else setCardValidationErrMsg("");
        if (cardFields.name.length < 2) {
            return;
        }
        if (cardFields.population < 700) {
            return setCardValidationErrMsg(
                "Population should be more than 700",
            );
        } else setCardValidationErrMsg("");
        if (cardFields.capital.length > 20) {
            return setCardValidationErrMsg(
                "Capital should contain less than 20 characters",
            );
        } else setCardValidationErrMsg("");
        if (cardFields.capital.length < 2) {
            return;
        }

        if (editableCard) {
            const cardUpdate = async () => {
                const updatedCard = { ...editableCard, ...cardFields };
                try {
                    await cardUpdateApi(updatedCard);
                    refetch();
                    setEditableCard(null);
                } catch (error) {
                    console.log("error:", error);
                    throw new Error("Failed to update countries card");
                }
            };
            cardUpdate();
        } else {
            const newCardId =
                data && data.length > 0 && !isNaN(Number(data?.at(-1)?.id))
                    ? (Number(data?.at(-1)?.id) + 1).toString()
                    : "1";

            const newCard = {
                ...cardFields,
                id: newCardId,
                vote: 0,
            };
            const addCard = async () => {
                try {
                    await addCardApi(newCard);
                    refetch();
                } catch (error) {
                    console.log("error:", error);
                    throw new Error("Can't add card");
                }
            };
            addCard();
        }
    };

    const handleCardDelete = (id: string) => {
        mutate(id, {
            onSuccess: () => {
                refetch();
            },
            onError: (error) => {
                console.log("Error deleting card:", error);
                throw new Error("Can't delete card");
            },
        });
    };
    const handleEditClick = (id: string) => {
        const cardToEdit = data?.find((card) => card.id === id);
        if (cardToEdit) {
            setEditableCard(cardToEdit);
            formRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleNameLang = (selectedLang: string, card: Card) => {
        return selectedLang === "ge" ? card.nameGe : card.name;
    };

    const handleCapitalLang = (selectedLang: string, card: Card) => {
        return selectedLang === "ge" ? card.capitalGe : card.capital;
    };

    return (
        <>
            <div ref={formRef}>
                <CardCreateForm
                    errMsg={cardValidationErrMsg}
                    onCardCreate={handleCardCreate}
                    initialValues={editableCard || undefined}
                />
            </div>
            <div className={`${styles.cardSection} ${styles.container}`}>
                <p className={styles.sort}>
                    Sort by <span> </span>
                    <button
                        onClick={() => handleCardsSort("desc")}
                        disabled={sortOrder === "desc"}
                    >
                        Most Voted
                    </button>
                    /
                    <button
                        onClick={() => handleCardsSort("asc")}
                        disabled={sortOrder === "asc"}
                    >
                        Least Voted
                    </button>
                </p>
                <div ref={parentRef} className={styles.virtualDivParent}>
                    <div className={styles.virtualDiv}>
                        {rowVirtualizer.getVirtualItems().map((virtualItem) => {
                            const card = cardList[virtualItem.index];
                            //  if (!card) return null;

                            return (
                                <div
                                    key={card.id}
                                    className={styles.divVirtual}
                                >
                                    <PageCard key={card.id} id={card.id}>
                                        <PageCardHeader
                                            image={card.image}
                                            altText={`${card.name} Flag`}
                                        />
                                        <PageCardContent
                                            heading={handleNameLang(
                                                selectedLang,
                                                card,
                                            )}
                                            population={card.population}
                                            capital={handleCapitalLang(
                                                selectedLang,
                                                card,
                                            )}
                                            onVote={() =>
                                                handleCardVote(card.id)
                                            }
                                            voteCount={card.vote}
                                        />
                                        <PageCardFooter
                                            id={card.id}
                                            onDelete={handleCardDelete}
                                            onEdit={handleEditClick}
                                        />
                                    </PageCard>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

CardPageSectionTest.displayName = "Card Page";

export default CardPageSectionTest;
