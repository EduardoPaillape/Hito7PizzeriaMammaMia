import { Link } from "react-router-dom";
import { formatPrice } from "../utils/format";

const Navbar = () => {
  const total = 25000; 
  const token = false; 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">🍕 PizzaApp</Link>

      <div className="collapse navbar-collapse d-flex justify-content-between w-100">
        <div className="navbar-nav">
          <Link to="/" className="btn btn-outline-light mx-1">🍕 Home</Link>

          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light mx-1">🔓 Profile</Link>
              <button className="btn btn-outline-light mx-1">🔒 Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light mx-1">🔐 Login</Link>
              <Link to="/register" className="btn btn-outline-light mx-1">🔐 Register</Link>
            </>
          )}
        </div>

        <Link to="/cart" className="btn btn-success">
          🛒 Total: ${formatPrice(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;




