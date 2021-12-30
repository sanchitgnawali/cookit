import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cookit PRO</h1>
        </Link>
        <Link to="/create">Create recipe</Link>
      </nav>
    </div>
  );
}
