import { Link } from "react-router-dom";
import { FaBitcoin } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="navBar">
      <FaBitcoin className="iconBit" />
      <ul className="listNavBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/assest">Assest</Link>
        </li>
        <li>
          <Link to="/auth">Login</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
