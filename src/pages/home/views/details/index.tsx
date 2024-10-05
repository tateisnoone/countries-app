import { useParams } from "react-router-dom";
import { cardDetails } from "../../static/countries-data";
import CardDetailsPage from "../../components/card-details/details-page";

const CardDetailsPageView = () => {
  const { id } = useParams();
  const cardInfo = cardDetails.find((country) => country.id == id);
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
