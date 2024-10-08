import styles from "./card-section.module.css";
import CardHeader from "./Card-Header/card-header";
import { cardDetails } from "../../static/countries-data";
import CardContent from "./Card-Content/card-content";
import Card from "./card/card";
import { Link } from "react-router-dom";
import { useState } from "react";

const CardSection: React.FC = () => {
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
      <div className={styles.left}>
        <h1>Countries Where Vought International Operates</h1>
        <Link to="/cards">See More</Link>
      </div>
      <div className={styles.right}>
        {cardList.map((card) => {
          return (
            <Card id={card.id}>
              <CardHeader imgSrc={card.img} altText={`${card.name} Flag`} />
              <CardContent
                heading={card.name}
                population={card.population}
                capital={card.capital}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

CardSection.displayName = "Card Section";

export default CardSection;
