import React, { Component } from "react";
import { Link } from "react-router-dom";

import SearchFunction from '../../../containers/SearchFunction/SearchFunction'

const Navbar = (props) => {
  return (
    <div className="fixed mb-2 t-0 w-full z-50" style={{ backgroundColor: "#313030" }} id="mainNavBar">
      <nav className="flex ml-16 xl:ml-40">
        <Link to="/">
          <div className="flex text-clone text-6xl font-semibold">
            Netflix
          </div>
        </Link>
        {/* <div className="block flex-grow flex items-center w-auto">
          <SearchFunction class="outline-none bg-purple-white shadow rounded-full text-xs border border-solid border-gray-400 p-1 pr-2 focus:border-tekno appearance-none" />
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;