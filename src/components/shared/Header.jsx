import React from "react";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-around px-5 py-7">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/">Exercises</Link>
      </div>
    </div>
  );
}
