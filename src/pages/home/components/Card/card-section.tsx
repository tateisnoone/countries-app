import styles from "./card-section.module.css";
import { PropsWithChildren } from "react";

const CardSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${styles.cardSection} ${styles.container}`}>
      <div className={styles.left}>
        <h1>Countries Where Vought International Operates</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>{children}</div>
      </div>
    </div>
  );
};

CardSection.displayName = "Card Section";

export default CardSection;
