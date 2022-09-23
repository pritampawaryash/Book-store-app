import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/cart-page.css";
import { useNavigate } from "react-router-dom";

// import "..styles/cart-page.css";


const Amazon = ({ handleClick }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    alert(`Logout Successfully`);
    localStorage.removeItem("Login");
    navigate("/");
  };
  return (
    <div className="container">
    <section className="container-fluid">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    {/* <button  onClick={handleLogout}></button> */}
    </div>
  );
};

export default Amazon;
