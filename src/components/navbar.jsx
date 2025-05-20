import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/format";

const Navbar = () => {
  const { total } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Pizza Mamma Mia 🍕</Link>
      <Link className="btn btn-outline-light" to="/cart">
        🛒 Carrito: {formatPrice(total)}
      </Link>
    </nav>
  );
};

export default Navbar;





