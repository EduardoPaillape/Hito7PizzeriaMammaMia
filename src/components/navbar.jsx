import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { formatPrice } from "../utils/format";

const Navbar = () => {
  const { total } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Pizza Mamma Mia</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          {token ? (
            <>
              <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
              <li className="nav-item"><button className="btn btn-link nav-link" onClick={logout}>Logout</button></li>
            </>
          ) : (
            <>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            </>
          )}
          <li className="nav-item"><Link className="nav-link" to="/cart">🛒 ${formatPrice(total)}</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

