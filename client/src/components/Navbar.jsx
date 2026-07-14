import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">MyStore</div>

      <div className="tabs">
        <NavLink to="/" end className={({ isActive }) => isActive ? "tab active" : "tab"}>
          Home
        </NavLink>

        <NavLink to="/cart" className={({ isActive }) => isActive ? "tab active" : "tab"}>
          Cart
        </NavLink>

        {user ? (
          <>
            <span className="welcome">
              Welcome, <strong>{user.name}</strong>
            </span>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? "tab active" : "tab"}>
              Login
            </NavLink>

            <NavLink to="/register" className={({ isActive }) => isActive ? "tab active" : "tab"}>
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}