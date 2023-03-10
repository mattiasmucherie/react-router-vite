import { NavLink } from "react-router-dom";
import "./styles.css";

export const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul className="NavigationList">
          <li className="NavigationListItem">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/faqs">FAQ</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
