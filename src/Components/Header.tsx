import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header container">
        <div className="logo">
          <img src="/src/assets/Vought.svg" alt="Vought Logo" />
        </div>
        <div className="navigation">
          <nav>
            <ul className="navClass">
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
export default Header;
