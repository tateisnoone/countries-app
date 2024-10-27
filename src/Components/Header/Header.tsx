import styles from "./Header.module.css";
import voughtLogo from "@/assets/Vought.svg";
import { useState } from "react";
import {
    NavLink,
    NavLinkRenderProps,
    useNavigate,
    useParams,
} from "react-router-dom";

export const Header: React.FC = () => {
    const { lang } = useParams<{ lang: "en" | "ge" }>();
    const [selectedLang, setSelectedLang] = useState(lang || "en");
    const navigate = useNavigate();
    const handleNavActivity = (props: NavLinkRenderProps) => {
        const { isActive } = props;
        if (isActive) {
            return styles["activeNav"];
        } else {
            return styles["navClass"];
        }
    };
    const handleLanguageSwitch = (selectedLang: string) => {
        if (selectedLang === "ge") {
            return styles["geNav"];
        } else return styles["enNav"];
    };
    const headerContent = {
        en: {
            home: "Home",
            news: "News",
            about: "About The 7",
            contact: "Contact",
        },
        ge: {
            home: "მთავარი",
            news: "სიახლეები",
            about: "ჩვენს შესახებ",
            contact: "კონტაქტი",
        },
    };
    const handleLanguage = (lang: "en" | "ge") => {
        setSelectedLang(lang);
        navigate(`/${lang}/home`);
    };
    return (
        <header>
            <div className={`${styles.header} ${styles.container}`}>
                <div className={styles.logo}>
                    <img src={voughtLogo} alt="Vought Logo" />
                </div>
                <div className={styles.navigation}>
                    <nav className={handleLanguageSwitch(selectedLang)}>
                        <ul className={styles.navClass}>
                            <li>
                                <NavLink
                                    className={handleNavActivity}
                                    to={`/${selectedLang}/home`}
                                >
                                    {headerContent[selectedLang].home}
                                </NavLink>
                            </li>
                            <li>
                                <a href="">
                                    {" "}
                                    {headerContent[selectedLang].news}
                                </a>
                            </li>
                            <li>
                                <NavLink
                                    className={handleNavActivity}
                                    to={`/${selectedLang}/about`}
                                >
                                    {headerContent[selectedLang].about}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={handleNavActivity}
                                    to={`/${selectedLang}/contact`}
                                >
                                    {headerContent[selectedLang].contact}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.langDiv}>
                        <button onClick={() => handleLanguage("ge")}>GE</button>
                        <div className={styles.langStick}></div>
                        <button onClick={() => handleLanguage("en")}>EN</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.displayName = "Header Section";
