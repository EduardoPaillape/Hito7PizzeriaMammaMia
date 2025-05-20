import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/">Mamma Mia</NavLink>
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/">Home</NavLink>
        {token && <NavLink className="nav-link" to="/profile">Profile</NavLink>}
        {!token && <NavLink className="nav-link" to="/login">Login</NavLink>}
        {!token && <NavLink className="nav-link" to="/register">Register</NavLink>}
        <NavLink className="nav-link" to="/cart">Cart</NavLink>
      </div>
      <div className="ms-auto text-white d-flex align-items-center gap-3">
        <span>Total: $...</span>
        {token && (
          <button className="btn btn-sm btn-danger" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
