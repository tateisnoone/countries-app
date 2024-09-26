import styles from "./card-header.module.css";
import "../card-section";
import USAFlag from "@/assets/usaFlag.jpeg";
const CardHeader: React.FC = () => {
  return (
    <div className={styles.cardHeader}>
      <img src={USAFlag} alt="USA Flag" />
    </div>
  );
};

export default CardHeader;
