import styles from "./page-card-list.module.css";
import PageCardContent from "../card-content/page-card-content";
import PageCardFooter from "../card-footer/page-card-footer";
import PageCardHeader from "../card-header/page-card-header";
import PageCard from "../card/page-card";
import { FormEvent, useReducer } from "react";
import CardCreateForm from "../card-create-form/card-create-form";
import { cardsReducer } from "./reducer/reducer";
import { cardsInitialState } from "./reducer/state";

const CardPageSection: React.FC = () => {
  const [cardList, dispatch] = useReducer(cardsReducer, cardsInitialState);

  const handleCardVote = (id: string) => {
    return () => {
      dispatch({ type: "vote", payload: { id } });
    };
  };

  const handleCardsSort = (sortType: "asc" | "desc") => {
    dispatch({ type: "sort", payload: { sortType } });
  };

  const handleCardCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cardFields: any = {};
    const formData = new FormData(e.currentTarget);
    for (const [key, value] of formData) {
      cardFields[key] = value;
    }
    dispatch({ type: "create", payload: { cardFields } });
  };

  const handleCardDelete = (id: string) => {
    dispatch({ type: "delete", payload: { id } });
  };
  const handleCardRecover = (id: string) => {
    dispatch({ type: "recover", payload: { id } });
  };
  return (
    <>
      <CardCreateForm onCardCreate={handleCardCreate} />
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
              <PageCard key={card.id} id={card.id} deleted={card.deleted}>
                <PageCardHeader
                  imgSrc={card.img}
                  altText={`${card.name} Flag`}
                />
                <PageCardContent
                  heading={card.name}
                  population={card.population}
                  capital={card.capital}
                  onVote={handleCardVote(card.id)}
                  voteCount={card.vote}
                />
                <PageCardFooter
                  id={card.id}
                  onDelete={handleCardDelete}
                  onRecover={handleCardRecover}
                  isDeleted={card.deleted}
                />
              </PageCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

CardPageSection.displayName = "Card Page";

export default CardPageSection;
