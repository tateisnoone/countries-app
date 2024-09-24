import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={`${styles.hero} ${styles.container}`}>
      <div className={styles.aboutUs}>
        <h1>Today's Heroes Tomorrow's Future</h1>
        <p>
          Vought International leads the way in hero management and innovation,
          ensuring safety and justice for all. Together, we create a brighter,
          safer future.
        </p>
        <button className={styles.heroButton}>Meet our Heroes</button>
      </div>
    </div>
  );
};

Hero.displayName = "Hero Section";

export default Hero;
