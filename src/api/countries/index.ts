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
export const getCountriesApi = async (params: {
    _order: "asc" | "desc";
}): Promise<Country[]> => {
    if (params._order === "asc") {
        try {
            const response = await HttpClient.get("/countries?_sort=vote");
            return response.data;
        } catch (error) {
            console.log("error:", error);
            return [];
        }
    } else {
        try {
            const response = await HttpClient.get("/countries?_sort=-vote");
            return response.data;
        } catch (error) {
            console.log("error:", error);
            return [];
        }
    }
};

export const cardUpdateApi = async (updatedCard: Card) => {
    try {
        await HttpClient.put(`/countries/${updatedCard.id}`, updatedCard);
    } catch (error) {
        console.log("error:", error);
        throw new Error("error");
    }
};

export const addCardApi = async (newCard: Card) => {
    try {
        await HttpClient.post("/countries", newCard);
    } catch (error) {
        console.log("error:", error);
        throw new Error("error");
    }
};

export const cardDeleteApi = async (id: string) => {
    try {
        await HttpClient.delete(`/countries/${id}`);
    } catch (error) {
        console.log("error:", error);
        throw new Error("Error");
    }
};
export const cardDetailsApi = async (): Promise<Country[]> => {
    try {
        const response = await HttpClient.get("/countries");
        return response.data;
    } catch (error) {
        console.log("error:", error);
        return [];
    }
};
