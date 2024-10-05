import { PropsWithChildren, ReactNode } from "react";

import styles from "./card-section.module.css";

const CardSection: React.FC<PropsWithChildren<{ children: ReactNode[] }>> = ({
  children,
}) => {
  return (
    <div className={`${styles.cardSection} ${styles.container}`}>
      <div className={styles.left}>
        <h1>Countries Where Vought International Operates</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>
          {children[0]}
          {children[1]}
          {children[2]}
        </div>

        <div className={styles.card}>
          {children[3]}
          {children[4]}
          {children[5]}
        </div>
      </div>
    </div>
  );
};

CardSection.displayName = "Card Section";

export default CardSection;
