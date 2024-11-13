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
interface CountriesApiResponse {
    rows: Country[];
    nextOffset: number | null;
}

function getNextPageNumber(relType: string, pagination: string) {
    const regex = new RegExp(`<[^>]*[?&]_page=(\\d+)[^>]*>; rel="${relType}"`);
    const match = pagination.match(regex);
    return match ? parseInt(match[1], 10) : null;
}
export const getCountriesApi = async (params: {
    _order: "asc" | "desc";
    page: number;
    limit: number;
}): Promise<CountriesApiResponse> => {
    if (params._order === "asc") {
        try {
            const response = await HttpClient.get<Country[]>(
                `/countries?_page=${params.page}&_limit=${params.limit}&_sort=vote`,
            );
            return {
                rows: response.data,
                nextOffset: getNextPageNumber("next", response.headers.link),
            };
        } catch (error) {
            console.log("error:", error);
            return {
                rows: [],
                nextOffset: null,
            };
        }
    } else {
        try {
            const response = await HttpClient.get(
                `/countries?_page=${params.page}&_limit=${params.limit}&_sort=-vote`,
            );
            return {
                rows: response.data,
                nextOffset: getNextPageNumber("next", response.headers.link),
            };
        } catch (error) {
            console.log("error:", error);
            return {
                rows: [],
                nextOffset: null,
            };
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
