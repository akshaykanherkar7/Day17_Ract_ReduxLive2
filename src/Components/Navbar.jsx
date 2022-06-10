import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        gap: "20px",
        fontSize: "30px",
      }}
    >
      <Link to="/">Counter</Link>
      <Link to="/todos">TodoApp</Link>
    </div>
  );
};

export default Navbar;
