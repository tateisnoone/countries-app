import styles from "./card-content.module.css";
const country = {
  name: "USA",
  population: 331000000,
  capital: "Washington D.C",
};
const CardContent = () => {
  return (
    <div className={styles.cardContent}>
      <h1>{country.name}</h1>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};

export default CardContent;
