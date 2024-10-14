import imgSrc from "@/assets/defaultcardcover.jpeg";
type cardsReducerInitialState = {
  name: string;
  population: number;
  capital: string;
  saves: string;
  img: string;
  id: string;
  vote: number;
  deleted: boolean;
}[];

export const cardsReducer = (
  cardList: cardsReducerInitialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any
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
    const updatedCardsList = [
      ...cardList,
      {
        ...action.payload.cardFields,
        img: imgSrc,
        vote: 0,
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
