import styles from "./cards-section.module.css";
import usaFlag from "../../assets/usaFlag.jpeg";
import georgiaFlag from "../../assets/georgiaFlag.jpeg";
//import { PropsWithChildren } from "react";

const countries = [
  {
    name: "USA",
    population: 331000000,
    capital: "Washington D.C",
    image: usaFlag,
  },
  {
    name: "Georgia",
    population: 3710000,
    capital: "Tbilisi",
    image: georgiaFlag,
  },
];
const CardsSection: React.FC = () => {
  return (
    <div className={`${styles.cardSection} ${styles.container}`}>
      <div className={styles.left}>
        <h1>Countries Where Vought International Operates</h1>
      </div>
      <div className={styles.right}>
        {countries.map((country, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardHeader}>
              <img src={country.image} alt="USA flag" />
            </div>
            <div className={styles.cardContent}>
              <h1>{country.name}</h1>
              <p>Population: {country.population}</p>
              <p>Capital: {country.capital}</p>
            </div>

            <div className={styles.cardFooter}>
              <a href="#">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CardsSection.displayName = "Cards Section";

export default CardsSection;
