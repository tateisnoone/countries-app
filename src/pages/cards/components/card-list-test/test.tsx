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
import { useQuery } from "@tanstack/react-query";

const CardPageSectionTest: React.FC = () => {
    const [cardList, setCardList] = useState<Card[]>([]);
    const { lang } = useParams<{ lang: "en" | "ge" }>();
    const [cardValidationErrMsg, setCardValidationErrMsg] = useState("");
    const selectedLang = lang || "en";
    const [editableCard, setEditableCard] = useState<Card | null>(null);

    const formRef = useRef<HTMLDivElement | null>(null); // Create a ref for the form

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

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["countries-list"],
        queryFn: getCountriesApi,
        retry: 0,
    });
    useEffect(() => {
        setCardList(data ?? []);
    }, [data]);
    console.log(data, isLoading, isError);
    // useEffect(() => {
    //     const fetchCountries = async () => {
    //         try {
    //             const countries = await getCountriesApi();
    //             setCardList(countries);
    //         } catch (error) {
    //             console.log("error:", error);
    //         }
    //     };
    //     fetchCountries();
    // }, []);

    const handleCardVote = (id: string) => {
        setCardList((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { ...card, vote: card.vote + 1 } : card,
            ),
        );
    };

    const handleCardsSort = (sortType: "asc" | "desc") => {
        const copiedActiveCards = [...cardList];

        if (sortType === "asc") {
            copiedActiveCards.sort((a, b) => a.vote - b.vote);
        } else if (sortType === "desc") {
            copiedActiveCards.sort((a, b) => b.vote - a.vote);
        }

        setCardList(copiedActiveCards);
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
                }
            };
            cardUpdate();
        } else {
            const newCardId =
                cardList.length > 0 && !isNaN(Number(cardList.at(-1)?.id))
                    ? (Number(cardList.at(-1)?.id) + 1).toString()
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
                }
            };
            addCard();
        }
    };

    const handleCardDelete = async (id: string) => {
        try {
            await cardDeleteApi(id);
            refetch();
        } catch (error) {
            console.log("error:", error);
        }
    };

    const handleEditClick = (id: string) => {
        const cardToEdit = cardList.find((card) => card.id === id);
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
                    <button onClick={() => handleCardsSort("desc")}>
                        Most Voted
                    </button>
                    /
                    <button onClick={() => handleCardsSort("asc")}>
                        Least Voted
                    </button>
                </p>
                <div className={styles.right}>
                    {isLoading && (
                        <div className={styles.loading}> Loading...</div>
                    )}
                    {isError && (
                        <div className={styles.error}>List can't be loaded</div>
                    )}
                    {cardList.map((card) => (
                        <PageCard key={card.id} id={card.id}>
                            <PageCardHeader
                                image={card.image}
                                altText={`${card.name} Flag`}
                            />
                            <PageCardContent
                                heading={handleNameLang(selectedLang, card)}
                                population={card.population}
                                capital={handleCapitalLang(selectedLang, card)}
                                onVote={() => handleCardVote(card.id)}
                                voteCount={card.vote}
                            />
                            <PageCardFooter
                                id={card.id}
                                onDelete={handleCardDelete}
                                onEdit={handleEditClick}
                            />
                        </PageCard>
                    ))}
                </div>
            </div>
        </>
    );
};

CardPageSectionTest.displayName = "Card Page";

export default CardPageSectionTest;
