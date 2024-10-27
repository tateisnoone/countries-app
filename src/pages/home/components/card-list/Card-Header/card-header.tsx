import styles from "./card-header.module.css";
import "../card-section";

const CardHeader: React.FC<{ imgSrc: string; altText: string }> = ({
    imgSrc,
    altText,
}) => {
    return (
        <div className={styles.cardHeader}>
            <img src={imgSrc} alt={altText} />
        </div>
    );
};

export default CardHeader;
