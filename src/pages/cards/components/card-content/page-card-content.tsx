import styles from "./page-card-content.module.css";

const PageCardContent: React.FC<{
  heading: string;
  population: number;
  capital: string;
}> = ({ heading, population, capital }) => {
  return (
    <div className={styles.pageCardContent}>
      <h1>{heading}</h1>
      <p>Population: {population}</p>
      <p>Capital: {capital}</p>
    </div>
  );
};

export default PageCardContent;
