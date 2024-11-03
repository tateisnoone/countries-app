import { useParams } from "react-router-dom";
import styles from "./page-card-content.module.css";

const PageCardContent: React.FC<{
    heading: string;
    population: number;
    capital: string;
    voteCount: number;
    onVote: () => void;
}> = ({ heading, population, capital, voteCount, onVote }) => {
    const { lang } = useParams<{ lang: "en" | "ge" }>();
    const selectedLang = lang || "en";
    const handleLangChange = {
        en: {
            population: "Population:",
            capital: "Capital:",
            text: `I'm from ${heading}`,
            vote: "Vote",
        },
        ge: {
            population: "მოსახლეობა:",
            capital: "დედაქალაქი:",
            text: `მე ვარ ${heading}დან`,
            vote: "ხმის მიცემა",
        },
    };
    const handleVoteTextLang = (selectedLang: "en" | "ge") => {
        if (selectedLang === "ge") {
            return styles.vote_text_ge;
        } else return styles.vote_text;
    };
    return (
        <div className={styles.pageCardContent}>
            <h1>{heading}</h1>
            <p>
                {handleLangChange[selectedLang].population} {population}
            </p>
            <p>
                {handleLangChange[selectedLang].capital} {capital}
            </p>
            <h2 className={handleVoteTextLang(selectedLang)}>
                {handleLangChange[selectedLang].text} -
                <span onClick={onVote}>
                    {handleLangChange[selectedLang].vote} {voteCount}
                </span>
            </h2>
        </div>
    );
};

export default PageCardContent;
