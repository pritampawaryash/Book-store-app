import React from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    alert(`Logout Successfully`);
    localStorage.removeItem("Login");
    navigate("/");
  };
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
        <span>
          <button className="btn btn-light btn-sm mb-3" onClick={handleLogout}>
            Logout
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
