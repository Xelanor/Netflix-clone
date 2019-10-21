import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="fixed mb-2 t-0 w-full z-50" style={{ backgroundColor: "#313030" }} id="mainNavBar">
      <nav className="flex ml-16 xl:ml-40">
        <Link to="/">
          <div className="flex text-clone text-6xl font-semibold">
            Netflix
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;