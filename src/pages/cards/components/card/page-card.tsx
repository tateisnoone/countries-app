import { PropsWithChildren } from "react";
import styles from "./page-card.module.css";

const PageCard: React.FC<PropsWithChildren<{ id: string }>> = ({
    children,
}) => {
    return <div className={`${styles.page_card}`}>{children}</div>;
};
export default PageCard;
