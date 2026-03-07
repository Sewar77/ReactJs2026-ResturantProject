import React, { useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Theme from "../../Theme/Theme.jsx";
import { UserContext } from "../../Context/UserContext.jsx";
function Navbar() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="nav">
      <div className="logo">
        <h2> Pizza</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <Theme />
        </li>
        <li>
          <button onClick={() => navigate("/register")}>Sigin In</button>
        </li>
        <li>
          <button onClick={() => navigate("/login")}>Sigin Up</button>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
