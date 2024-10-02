import styles from "./Header.module.css";
import voughtLogo from "@/assets/Vought.svg";
import { NavLink, NavLinkRenderProps } from "react-router-dom";

export const Header: React.FC = () => {
  const handleNavActivity = (props: NavLinkRenderProps) => {
    const { isActive } = props;
    if (isActive) {
      return styles["activeNav"];
    } else {
      return styles["navClass"];
    }
  };
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
                <NavLink className={handleNavActivity} to="/">
                  <a>Home</a>
                </NavLink>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <NavLink className={handleNavActivity} to="/about">
                  <a>About The 7</a>
                </NavLink>
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
