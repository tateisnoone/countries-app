import styles from "./Header.module.css";
import voughtLogo from "@/assets/Vought.svg";
export const Header: React.FC = () => {
  return (
    <header>
      <div className={`${styles.header} ${styles.container}`}>
        <div className={styles.logo}>
          <img src={voughtLogo} alt="Vought Logo" />
        </div>
        <div className={styles.navigation}>
          <nav>
            <ul className={styles.navClass}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <a href="">About The Seven</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header Section";
