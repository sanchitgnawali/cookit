import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "./../hooks/useTheme";

//styles
import "./Navbar.css";

export default function Navbar() {
  const { color, changeColor } = useTheme();

  return (
    <div
      onClick={() => changeColor("red")}
      className="navbar"
      style={{ background: color }}
    >
      <nav>
        <Link to="/" className="brand">
          <h1>Cookit PRO</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  );
}
