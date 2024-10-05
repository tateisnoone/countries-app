import { Link } from "react-router-dom";
import styles from "./card-footer.module.css";

const CardFooter: React.FC<React.PropsWithChildren<{ id: string }>> = ({
  id,
}) => {
  return (
    <div className={styles.cardFooter}>
      <Link to={`/${id}`}>
        <a>Learn More</a>
      </Link>
    </div>
  );
};
export default CardFooter;
