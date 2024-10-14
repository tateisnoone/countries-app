import { Link } from "react-router-dom";
import styles from "./page-card-footer.module.css";

const PageCardFooter: React.FC<
  React.PropsWithChildren<{
    id: string;
    onDelete: (id: string) => void;
    onRecover: (id: string) => void;
    isDeleted: boolean;
  }>
> = ({ id, onDelete, onRecover, isDeleted }) => {
  return (
    <div className={styles.cardFooter}>
      <Link to={`/cards/${id}`}>Learn More</Link>
      <div className={styles.line_div}></div>
      {isDeleted ? (
        <span className={styles.for_recover} onClick={() => onRecover(id)}>
          Recover
        </span>
      ) : (
        <span className={styles.for_delete} onClick={() => onDelete(id)}>
          Delete
        </span>
      )}
    </div>
  );
};
export default PageCardFooter;
