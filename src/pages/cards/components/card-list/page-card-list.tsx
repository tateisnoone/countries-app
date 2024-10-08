import styles from "./page-card-list.module.css";
import { cardDetails } from "@/pages/home/static/countries-data";
import PageCardContent from "../card-content/page-card-content";
import PageCardFooter from "../card-footer/page-card-footer";
import PageCardHeader from "../card-header/page-card-header";
import PageCard from "../card/page-card";
import { useState } from "react";

const CardPageSection: React.FC = () => {
  const [cardList] = useState<
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
  return (
    <div className={`${styles.cardSection} ${styles.container}`}>
      <div className={styles.right}>
        {cardList.map((card) => {
          return (
            <PageCard id={card.id}>
              <PageCardHeader imgSrc={card.img} altText={`${card.name} Flag`} />
              <PageCardContent
                heading={card.name}
                population={card.population}
                capital={card.capital}
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
