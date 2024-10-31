export type CardsReducerInitialState = {
    id: string;
    name: string;
    nameGe: string;
    population: number;
    capital: string;
    capitalGe: string;
    image: string;
    vote: number;
    deleted: boolean;
    saves: string;
}[];
type CardsAction =
    | { type: "vote"; payload: { id: string } }
    | { type: "sort"; payload: { sortType: "asc" | "desc" } }
    | {
          type: "create";
          payload: {
              cardFields: {
                  name: string;
                  nameGe: string;
                  population: number;
                  capital: string;
                  capitalGe: string;
              };
          };
      }
    | { type: "delete"; payload: { id: string } }
    | { type: "recover"; payload: { id: string } };

export const cardsReducer = (
    cardList: CardsReducerInitialState,
    action: CardsAction,
) => {
    if (action.type === "vote") {
        const updatedCardList = cardList.map((card) => {
            if (card.id === action.payload.id) {
                return { ...card, vote: card.vote + 1 };
            }
            return { ...card };
        });
        return updatedCardList;
    }
    if (action.type === "sort") {
        const activeCards = cardList.filter((card) => !card.deleted);

        const copiedActiveCards = [...activeCards];

        if (action.payload.sortType === "asc") {
            copiedActiveCards.sort((a, b) => a.vote - b.vote);
        } else if (action.payload.sortType === "desc") {
            copiedActiveCards.sort((a, b) => b.vote - a.vote);
        }

        const deletedCards = cardList.filter((card) => card.deleted);

        // Return the sorted active cards followed by the deleted cards
        return [...copiedActiveCards, ...deletedCards];
    }

    if (action.type === "create") {
        const updatedCardsList: CardsReducerInitialState = [
            ...cardList,
            {
                ...action.payload.cardFields,
                vote: 0,
                deleted: false,
                image: "",
                saves: "",
                id: (Number(cardList.at(-1)?.id) + 1).toString(),
            },
        ];
        return updatedCardsList;
    }
    if (action.type === "delete") {
        const updatedCardList = cardList.map((card) => {
            if (card.id === action.payload.id) {
                return { ...card, deleted: true };
            }
            return card;
        });
        const sortedCardList = updatedCardList.sort((a, b) => {
            if (a.deleted && !b.deleted) return 1;
            if (!a.deleted && b.deleted) return -1;
            return 0;
        });

        return sortedCardList;
    }

    if (action.type === "recover") {
        const updatedCardList = cardList.map((card) => {
            if (card.id === action.payload.id) {
                return { ...card, deleted: false };
            }
            return card;
        });

        return updatedCardList;
    }
    return cardList;
};
