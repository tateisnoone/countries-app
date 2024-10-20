import styles from "./card-section.module.css";
import CardHeader from "./Card-Header/card-header";
import { cardDetails } from "../../static/countries-data";
import { cardDetailsGe } from "../../static/countries-data";
import CardContent from "./Card-Content/card-content";
import Card from "./card/card";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const CardSection: React.FC = () => {
  const { lang } = useParams<{ lang: "en" | "ge" }>();
  const selectedLang = lang || "en";
  const infoContent = {
    en: {
      title: "Countries Where Vought International Operates",
      link: "See More",
    },
    ge: {
      title: "ქვეყნები, სადაც Vought Int. ფუნქციონირებს",
      link: "გაიგე მეტი",
    },
  };
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

  const [cardListGe] = useState<
    {
      name: string;
      population: number;
      capital: string;
      saves: string;
      img: string;
      id: string;
      vote: number;
    }[]
  >(cardDetailsGe);

  const handleCardsLanguage = (selectedLang: string) => {
    if (selectedLang === "en") {
      return cardList;
    } else return cardListGe;
  };

  return (
    <div className={`${styles.cardSection} ${styles.container}`}>
      <div className={styles.left}>
        <h1>{infoContent[selectedLang].title}</h1>
        <Link to="cards">{infoContent[selectedLang].link}</Link>
      </div>
      <div className={styles.right}>
        return (
        <Card id={handleCardsLanguage(selectedLang)[0].id}>
          <CardHeader
            imgSrc={handleCardsLanguage(selectedLang)[0].img}
            altText={`${handleCardsLanguage(selectedLang)[0].name} Flag`}
          />
          <CardContent
            heading={handleCardsLanguage(selectedLang)[0].name}
            population={handleCardsLanguage(selectedLang)[0].population}
            capital={handleCardsLanguage(selectedLang)[0].capital}
          />
        </Card>
        <Card id={handleCardsLanguage(selectedLang)[1].id}>
          <CardHeader
            imgSrc={handleCardsLanguage(selectedLang)[1].img}
            altText={`${handleCardsLanguage(selectedLang)[1].name} Flag`}
          />
          <CardContent
            heading={handleCardsLanguage(selectedLang)[1].name}
            population={handleCardsLanguage(selectedLang)[1].population}
            capital={handleCardsLanguage(selectedLang)[1].capital}
          />
        </Card>
        );
      </div>
    </div>
  );
};

CardSection.displayName = "Card Section";

export default CardSection;
