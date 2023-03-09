import { Link } from "react-router-dom";
import styles from "./styles.module.css";
export const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul className="NavigationList">
          <li className="NavigationListItem">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
