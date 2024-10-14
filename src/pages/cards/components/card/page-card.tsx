import { PropsWithChildren } from "react";
import styles from "./page-card.module.css";

const PageCard: React.FC<
  PropsWithChildren<{ id: string; deleted: boolean }>
> = ({ children, deleted }) => {
  return (
    <div className={`${styles.page_card} ${deleted ? styles.deleted : ""}`}>
      {children}
    </div>
  );
};
export default PageCard;
