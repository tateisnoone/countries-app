import styles from "./page-card-header.module.css";

const PageCardHeader: React.FC<{ imgSrc: string; altText: string }> = ({
  imgSrc,
  altText,
}) => {
  return (
    <div className={styles.cardHeader}>
      <img src={imgSrc} alt={altText} />
    </div>
  );
};

export default PageCardHeader;
