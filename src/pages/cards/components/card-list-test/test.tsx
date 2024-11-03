import styles from "./test.module.css";
import PageCardContent from "../card-content/page-card-content";
import PageCardFooter from "../card-footer/page-card-footer";
import PageCardHeader from "../card-header/page-card-header";
import PageCard from "../card/page-card";
import { useEffect, useRef, useState } from "react";
import CardCreateForm from "../card-create-form/card-create-form";
import { useParams } from "react-router-dom";
import axios from "axios";

const CardPageSectionTest: React.FC = () => {
    const [cardList, setCardList] = useState<Card[]>([]);
    const { lang } = useParams<{ lang: "en" | "ge" }>();
    const [cardValidationErrMsg, setCardValidationErrMsg] = useState("");
    const selectedLang = lang || "en";
    //  const [editingCardId, setEditingCardId] = useState<string | null>(null); // State for the editing card ID
    const formRef = useRef<HTMLDivElement | null>(null); // Create a ref for the form
    //  const [initialValues, setInitialValues] = useState<Card | null>(null);

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
    useEffect(() => {
        axios.get("http://localhost:3000/countries").then((res) => {
            setCardList(res.data);
        });
    }, []);

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

        const sortedCardList = [...copiedActiveCards];
        setCardList(sortedCardList);
    };

    const handleCardCreate = (cardFields: {
        name: string;
        nameGe: string;
        population: number;
        capital: string;
        capitalGe: string;
        image: string;
    }) => {
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
                "Population should should be more than 700",
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
        const newCardId =
            cardList.length > 0
                ? (Number(cardList.at(-1)?.id) + 1).toString()
                : "1"; // Default to "1" if list is empty

        const newCard = {
            ...cardFields,
            id: newCardId,
            vote: 0,
            deleted: false,
        };

        axios.post("http://localhost:3000/countries", newCard).then(() => {
            setCardList((prevCardList) => [...prevCardList, newCard]);
        });
    };

    const handleCardDelete = (id: string) => {
        axios.delete(`http://localhost:3000/countries/${id}`).then(() => {
            setCardList((prevCardList) =>
                prevCardList.filter((card) => card.id !== id),
            );
        });
    };

    // const handleEditClick = (id: string) => {
    //     setEditingCardId(id);
    //     const cardToEdit = cardList.find((card) => card.id === id);
    //     if (cardToEdit) {
    //
    //         formRef.current?.scrollIntoView({ behavior: "smooth" });
    //         // Optionally, you can add logic here to fill the form if you implement it
    //     }
    // };
    const handleNameLang = (selectedLang: string, card: Card) => {
        if (selectedLang === "ge") {
            return card.nameGe;
        } else return card.name;
    };

    const handleCapitalLang = (selectedLang: string, card: Card) => {
        if (selectedLang === "ge") {
            return card.capitalGe;
        } else return card.capital;
    };
    return (
        <>
            <div ref={formRef}>
                <CardCreateForm
                    errMsg={cardValidationErrMsg}
                    onCardCreate={handleCardCreate}
                    //  initialValues={initialValues}
                />
            </div>
            <div className={`${styles.cardSection} ${styles.container}`}>
                <p className={styles.sort}>
                    Sort by <span> </span>
                    <button
                        onClick={() => {
                            handleCardsSort("desc");
                        }}
                    >
                        Most Voted
                    </button>
                    /
                    <button
                        onClick={() => {
                            handleCardsSort("asc");
                        }}
                    >
                        Least Voted
                    </button>
                </p>
                <div className={styles.right}>
                    {cardList.map((card) => {
                        return (
                            <PageCard key={card.id} id={card.id}>
                                <PageCardHeader
                                    image={card.image}
                                    altText={`${card.name} Flag`}
                                />
                                <PageCardContent
                                    heading={handleNameLang(selectedLang, card)}
                                    population={card.population}
                                    capital={handleCapitalLang(
                                        selectedLang,
                                        card,
                                    )}
                                    onVote={() => handleCardVote(card.id)}
                                    voteCount={card.vote}
                                />

                                <PageCardFooter
                                    id={card.id}
                                    onDelete={handleCardDelete}
                                    //onEdit={handleEditClick}
                                />
                            </PageCard>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

CardPageSectionTest.displayName = "Card Page";

export default CardPageSectionTest;
