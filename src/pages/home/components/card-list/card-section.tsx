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
        return (
        <Card id={cardList[0].id}>
          <CardHeader
            imgSrc={cardList[0].img}
            altText={`${cardList[0].name} Flag`}
          />
          <CardContent
            heading={cardList[0].name}
            population={cardList[0].population}
            capital={cardList[0].capital}
          />
        </Card>
        <Card id={cardList[1].id}>
          <CardHeader
            imgSrc={cardList[1].img}
            altText={`${cardList[1].name} Flag`}
          />
          <CardContent
            heading={cardList[1].name}
            population={cardList[1].population}
            capital={cardList[1].capital}
          />
        </Card>
        );
      </div>
    </div>
  );
};

CardSection.displayName = "Card Section";

export default CardSection;
