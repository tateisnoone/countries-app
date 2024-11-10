import { useParams } from "react-router-dom";
import CardDetailsPage from "../../components/card-details/details-page";
import { cardDetailsApi } from "@/api/countries";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
    const { data, isLoading, isError } = useQuery<Card[]>({
        queryKey: ["countries-list"],
        queryFn: cardDetailsApi,
        retry: 0,
    });
    useEffect(() => {
        setCardList(data ?? []);
    }, [data]);
    console.log(data, isLoading, isError);
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
