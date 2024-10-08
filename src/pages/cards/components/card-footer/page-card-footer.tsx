import { Link } from "react-router-dom";
import styles from "./page-card-footer.module.css";

const PageCardFooter: React.FC<React.PropsWithChildren<{ id: string }>> = ({
  id,
}) => {
  return (
    <div className={styles.cardFooter}>
      <Link to={`/cards/${id}`}>
        <a>Learn More</a>
      </Link>
    </div>
  );
};
export default PageCardFooter;
