import { useParams } from "react-router-dom";
import styles from "./hero.module.css";
const Hero: React.FC = () => {
    const { lang } = useParams<{ lang: "en" | "ge" }>();
    const selectedLang = lang || "en";
    const heroContent = {
        en: {
            title: "Today's Heroes Tomorrow's Future",
            text: "Vought International leads the way in hero management and innovation,ensuring safety and justice for all. Together, we create a brighter,safer future.",
            button: "Meet our Heroes",
        },
        ge: {
            title: "დღევანდელი გმირები, ხვალინდელი მომავლისთვის",
            text: "Vought International ლიდერობს გმირების მართვასა და ინოვაციებში, უზრუნველყოფს უსაფრთხოებასა და სამართლიანობას ყველასთვის. ერთად, ვქმნით უფრო ნათელ და უსაფრთხო მომავალს.",
            button: "გაიცანი გმირები",
        },
    };
    const handleLangChange = (selectedLang: string) => {
        if (selectedLang === "en") {
            return styles["aboutUs"];
        } else return styles["geAboutUs"];
    };
    return (
        <div className={`${styles.hero} ${styles.container}`}>
            <div className={handleLangChange(selectedLang)}>
                <h1>{heroContent[selectedLang].title}</h1>
                <p>{heroContent[selectedLang].text}</p>
                <button className={styles.heroButton}>
                    {heroContent[selectedLang].button}
                </button>
            </div>
        </div>
    );
};

Hero.displayName = "Hero Section";

export default Hero;
