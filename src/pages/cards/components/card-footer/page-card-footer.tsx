import { Link, useParams } from "react-router-dom";
import styles from "./page-card-footer.module.css";

const PageCardFooter: React.FC<
    React.PropsWithChildren<{
        id: string;
        onDelete: (id: string) => void;
        // onEdit: (id: string) => void;
    }>
> = ({ id, onDelete }) => {
    const { lang } = useParams<{ lang: "en" | "ge" }>();
    const selectedLang = lang || "en";
    const handleLangChange = {
        en: {
            learnmore: "Learn More",
            delete: "Delete",
            edit: "Edit",
        },
        ge: {
            learnmore: "გაიგე მეტი",
            delete: "წაშლა",
            edit: "შეცვლა",
        },
    };
    return (
        <div className={styles.cardFooter}>
            <Link to={`${id}`}>{handleLangChange[selectedLang].learnmore}</Link>
            <div className={styles.line_div}></div>
            <span className={styles.for_delete} onClick={() => onDelete(id)}>
                {handleLangChange[selectedLang].delete}
            </span>
            <div className={styles.line_div}></div>
            <span className={styles.for_delete}>
                {handleLangChange[selectedLang].edit}
            </span>
        </div>
    );
};
export default PageCardFooter;
