import styles from "./page-card-list.module.css";
import { cardDetails } from "@/pages/home/static/countries-data";
import PageCardContent from "../card-content/page-card-content";
import PageCardFooter from "../card-footer/page-card-footer";
import PageCardHeader from "../card-header/page-card-header";
import PageCard from "../card/page-card";
import { useState } from "react";

const CardPageSection: React.FC = () => {
  const [cardList, setCardList] = useState<
    {
      name: string;
      population: number;
      capital: string;
      saves: string;
      img: string;
      id: string;
      vote: number;
    }[]
  >(cardDetails);

  const [isSorted, setIsSorted] = useState(false);
  const handleCardVote = (id: string) => {
    return () => {
      const updatedCardList = cardList.map((card) => {
        if (card.id === id) {
          return { ...card, vote: card.vote + 1 };
        }
        return { ...card };
      });

      setCardList(updatedCardList);
    };
  };
  const handleSortClick = () => {
    setIsSorted((prevIsSorted) => !prevIsSorted);
  };

  let displayedCardList;
  if (isSorted) {
    displayedCardList = [...cardList].sort((a, b) => b.vote - a.vote);
  } else {
    displayedCardList = cardList;
  }
  return (
    <div className={`${styles.cardSection} ${styles.container}`}>
      <p className={styles.sort} onClick={handleSortClick}>
        Sort by Most Voted
      </p>
      <div className={styles.right}>
        {displayedCardList.map((card) => {
          return (
            <PageCard id={card.id}>
              <PageCardHeader imgSrc={card.img} altText={`${card.name} Flag`} />
              <PageCardContent
                heading={card.name}
                population={card.population}
                capital={card.capital}
                onVote={handleCardVote(card.id)}
                voteCount={card.vote}
              />
              <PageCardFooter id={card.id} />
            </PageCard>
          );
        })}
      </div>
    </div>
  );
};

CardPageSection.displayName = "Card Page";

export default CardPageSection;
