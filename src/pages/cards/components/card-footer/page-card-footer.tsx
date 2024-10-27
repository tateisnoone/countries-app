import { Link, useParams } from "react-router-dom";
import styles from "./page-card-footer.module.css";

const PageCardFooter: React.FC<
    React.PropsWithChildren<{
        id: string;
        onDelete: (id: string) => void;
        onRecover: (id: string) => void;
        isDeleted: boolean;
    }>
> = ({ id, onDelete, onRecover, isDeleted }) => {
    const { lang } = useParams<{ lang: "en" | "ge" }>();
    const selectedLang = lang || "en";
    const handleLangChange = {
        en: {
            learnmore: "Learn More",
            delete: "Delete",
            recover: "Recover",
        },
        ge: {
            learnmore: "გაიგე მეტი",
            delete: "წაშლა",
            recover: "აღდგენა",
        },
    };
    return (
        <div className={styles.cardFooter}>
            <Link to={`${id}`}>{handleLangChange[selectedLang].learnmore}</Link>
            <div className={styles.line_div}></div>
            {isDeleted ? (
                <span
                    className={styles.for_recover}
                    onClick={() => onRecover(id)}
                >
                    {handleLangChange[selectedLang].recover}
                </span>
            ) : (
                <span
                    className={styles.for_delete}
                    onClick={() => onDelete(id)}
                >
                    {handleLangChange[selectedLang].delete}
                </span>
            )}
        </div>
    );
};
export default PageCardFooter;
