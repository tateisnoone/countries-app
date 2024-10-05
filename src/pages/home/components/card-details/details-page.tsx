import { useParams } from "react-router-dom";
import styles from "./details-page.module.css";
import { cardDetails } from "../../static/countries-data";

const CardDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const cardInfo = cardDetails.find((country) => country.id === id);

  if (!cardInfo) {
    return <div>Card not found.</div>;
  }

  return (
    <div className={`${styles.container} ${styles.card_info}`}>
      <h1>Vought in {cardInfo.name}</h1>
      <img src={cardInfo.img} alt={cardInfo.name} />
      <p>
        With the population of {cardInfo.population}, {cardInfo.name} has been
        one of the main countries that Vought operates on. Our best heroes are
        working daily to save people from {cardInfo.capital} as well as other
        cities. currently, total amount of saved people in {cardInfo.name}{" "}
        include: {cardInfo.saves}.
      </p>
    </div>
  );
};

export default CardDetailsPage;
