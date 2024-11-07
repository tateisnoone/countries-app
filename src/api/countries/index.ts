import { HttpClient } from "../index";

interface Card {
    id: string;
}
interface Country {
    id: string;
    name: string;
    nameGe: string;
    population: number;
    capital: string;
    capitalGe: string;
    image: string;
    vote: number;
}

export const getCountriesApi = async (): Promise<Country[]> => {
    try {
        const response = await HttpClient.get("/countries");
        return response.data;
    } catch (error) {
        console.log("error:", error);
        return [];
    }
};

export const cardUpdateApi = async (updatedCard: Card) => {
    try {
        await HttpClient.put(`/countries/${updatedCard.id}`, updatedCard);
    } catch (error) {
        console.log("error:", error);
    }
};

export const addCardApi = async (newCard: Card) => {
    try {
        await HttpClient.post("/countries", newCard);
    } catch (error) {
        console.log("error:", error);
    }
};

export const cardDeleteApi = async (id: string) => {
    try {
        await HttpClient.delete(`/countries/${id}`);
    } catch (error) {
        console.log("error:", error);
    }
};
