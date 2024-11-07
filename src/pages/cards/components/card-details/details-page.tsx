import { useParams } from "react-router-dom";
import styles from "./details-page.module.css";
import { useEffect, useState } from "react";
import { getCountriesApi } from "@/api/countries";
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

const CardDetailsPage = () => {
    const [cardList, setCardList] = useState<Card[]>([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await getCountriesApi();
                setCardList(response);
            } catch (error) {
                console.log("error:", error);
            }
        };
        fetchCountries();
    }, []);
    const cardInfo = cardList.find((country) => country.id === id);

    if (!cardInfo) {
        return <div>Card not found.</div>;
    }

    return (
        <div className={`${styles.container} ${styles.card_info}`}>
            <h1>Vought in {cardInfo.name}</h1>
            <img src={cardInfo.image} alt={cardInfo.name} />
            <p>
                With the population of {cardInfo.population}, {cardInfo.name}
                has been one of the main countries that Vought operates on. Our
                best heroes are working daily to save people from
                {cardInfo.capital} as well as other cities.
            </p>
        </div>
    );
};

export default CardDetailsPage;
