import { useParams } from "react-router-dom";
import styles from "./card-content.module.css";

const CardContent: React.FC<{
    heading: string;
    population: number;
    capital: string;
}> = ({ heading, population, capital }) => {
    const { lang } = useParams<{ lang: "en" | "ge" }>();
    const selectedLang = lang || "en";
    const cardContent = {
        en: {
            population: "Population:",
            capital: "Capital:",
        },
        ge: {
            population: "მოსახლეობა:",
            capital: "დედაქალაქი:",
        },
    };
    return (
        <div className={styles.cardContent}>
            <h1>{heading}</h1>
            <p>
                {cardContent[selectedLang].population} {population}
            </p>
            <p>
                {cardContent[selectedLang].capital} {capital}
            </p>
        </div>
    );
};

export default CardContent;
