import { PropsWithChildren } from "react";
import styles from "./card.module.css";

const Card: React.FC<PropsWithChildren<{ id: string }>> = ({ children }) => {
    return <div className={styles.card}> {children} </div>;
};
export default Card;
