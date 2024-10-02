import styles from "./card-content.module.css";

const CardContent: React.FC<{
  heading: string;
  population: number;
  capital: string;
}> = ({ heading, population, capital }) => {
  return (
    <div className={styles.cardContent}>
      <h1>{heading}</h1>
      <p>Population: {population}</p>
      <p>Capital: {capital}</p>
    </div>
  );
};

export default CardContent;
