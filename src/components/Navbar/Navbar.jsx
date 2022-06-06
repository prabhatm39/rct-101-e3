import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = () => {
  
    if (isAuth) {
      logout();
     
    } else {
    
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar">
     
      <a data-cy="navbar-home-link" path="">Logo</a>
      <span data-cy="navbar-cart-items-count">{/* count here */} 0</span>
      <button data-cy="navbar-login-logout-button" onClick={handleChange}>
    {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
