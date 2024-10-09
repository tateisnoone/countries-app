import styles from "./page-card-content.module.css";

const PageCardContent: React.FC<{
  heading: string;
  population: number;
  capital: string;
  voteCount: number;
  onVote: () => void;
}> = ({ heading, population, capital, voteCount, onVote }) => {
  return (
    <div className={styles.pageCardContent}>
      <h1>{heading}</h1>
      <p>Population: {population}</p>
      <p>Capital: {capital}</p>
      <p className={styles.vote_text}>
        I'm from {heading} - <span onClick={onVote}>Vote {voteCount} </span>
      </p>
    </div>
  );
};

export default PageCardContent;
