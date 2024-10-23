import styles from "./page-card-header.module.css";

const PageCardHeader: React.FC<{ image: string; altText: string }> = ({
  image,
  altText,
}) => {
  return (
    <div className={styles.cardHeader}>
      <img src={image} alt={altText} />
    </div>
  );
};

export default PageCardHeader;
