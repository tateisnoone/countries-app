// import styles from "./page-card-list.module.css";
// import PageCardContent from "../card-content/page-card-content";
// import PageCardFooter from "../card-footer/page-card-footer";
// import PageCardHeader from "../card-header/page-card-header";
// import PageCard from "../card/page-card";
// import { useEffect, useReducer, useState } from "react";
// import CardCreateForm from "../card-create-form/card-create-form";
// import { cardsReducer } from "./reducer/reducer";
// //import { cardsInitialState } from "./reducer/state";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const CardPageSection: React.FC = () => {
//     useEffect(() => {
//         axios.get("http://localhost:3000/countries").then((res) => {
//             const cardsList = res.data;
//             console.log(cardsList);
//         });
//     });
//     const { lang } = useParams<{ lang: "en" | "ge" }>();
//     const [cardValidationErrMsg, setCardValidationErrMsg] = useState("");
//     const [cardList, dispatch] = useReducer(cardsReducer, cardsInitialState);
//     const selectedLang = lang || "en";

//     interface Card {
//         id: string;
//         name: string;
//         nameGe: string;
//         population: number;
//         capital: string;
//         capitalGe: string;
//         image: string;
//         vote: number;
//         deleted: boolean;
//     }

//     const handleCardVote = (id: string) => {
//         return () => {
//             dispatch({ type: "vote", payload: { id } });
//         };
//     };

//     const handleCardsSort = (sortType: "asc" | "desc") => {
//         dispatch({ type: "sort", payload: { sortType } });
//     };

//     const handleCardCreate = (cardFields: {
//         name: string;
//         population: number;
//         capital: string;
//         image: string;
//     }) => {
//         if (cardFields.name.length > 20) {
//             return setCardValidationErrMsg(
//                 "Country name should contain less than 20 characters",
//             );
//         } else setCardValidationErrMsg("");
//         if (cardFields.name.length < 2) {
//             return;
//         }
//         if (cardFields.population < 700) {
//             return setCardValidationErrMsg(
//                 "Population should should be more than 700",
//             );
//         } else setCardValidationErrMsg("");
//         if (cardFields.capital.length > 20) {
//             return setCardValidationErrMsg(
//                 "Capital should contain less than 20 characters",
//             );
//         } else setCardValidationErrMsg("");
//         if (cardFields.capital.length < 2) {
//             return;
//         }
//         dispatch({
//             type: "create",
//             payload: {
//                 cardFields: { ...cardFields, nameGe: "", capitalGe: "" },
//             },
//         });
//     };

//     const handleCardDelete = (id: string) => {
//         dispatch({ type: "delete", payload: { id } });
//     };
//     const handleCardRecover = (id: string) => {
//         dispatch({ type: "recover", payload: { id } });
//     };
//     const handleNameLang = (selectedLang: string, card: Card) => {
//         if (selectedLang === "ge") {
//             return card.nameGe;
//         } else return card.name;
//     };

//     const handleCapitalLang = (selectedLang: string, card: Card) => {
//         if (selectedLang === "ge") {
//             return card.capitalGe;
//         } else return card.capital;
//     };
//     return (
//         <>
//             <CardCreateForm
//                 errMsg={cardValidationErrMsg}
//                 onCardCreate={handleCardCreate}
//             />
//             <div className={`${styles.cardSection} ${styles.container}`}>
//                 <p className={styles.sort}>
//                     Sort by <span> </span>
//                     <button
//                         onClick={() => {
//                             handleCardsSort("desc");
//                         }}
//                     >
//                         Most Voted
//                     </button>
//                     /
//                     <button
//                         onClick={() => {
//                             handleCardsSort("asc");
//                         }}
//                     >
//                         Least Voted
//                     </button>
//                 </p>
//                 <div className={styles.right}>
//                     {cardList.map((card) => {
//                         return (
//                             <PageCard
//                                 key={card.id}
//                                 id={card.id}
//                                 deleted={card.deleted}
//                             >
//                                 <PageCardHeader
//                                     image={card.image}
//                                     altText={`${card.name} Flag`}
//                                 />
//                                 <PageCardContent
//                                     heading={handleNameLang(selectedLang, card)}
//                                     population={card.population}
//                                     capital={handleCapitalLang(
//                                         selectedLang,
//                                         card,
//                                     )}
//                                     onVote={handleCardVote(card.id)}
//                                     voteCount={card.vote}
//                                 />
//                                 <PageCardFooter
//                                     id={card.id}
//                                     onDelete={handleCardDelete}
//                                     onRecover={handleCardRecover}
//                                     isDeleted={card.deleted}
//                                 />
//                             </PageCard>
//                         );
//                     })}
//                 </div>
//             </div>
//         </>
//     );
// };

// CardPageSection.displayName = "Card Page";

// export default CardPageSection;
