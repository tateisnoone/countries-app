import { useParams } from "react-router-dom";
import CardDetailsPage from "../../components/card-details/details-page";
import { getCountriesApi } from "@/api/countries";
import { useEffect, useState } from "react";

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
const CardDetailsPageView = () => {
    const [cardList, setCardList] = useState<Card[]>([]);
    const { id } = useParams();
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

    console.log(cardInfo);

    const cardDoesntExist = !cardInfo;

    if (cardDoesntExist) {
        return <div style={{ color: "#fff" }}> There's no such card </div>;
    } else {
        return (
            <>
                <CardDetailsPage />
            </>
        );
    }
};

export default CardDetailsPageView;
