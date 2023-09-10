import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../Styles/Navbar.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar" >
      <div className="leftSide" >
        <h1>My Website</h1>
        
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <button onClick={toggleNavbar}>
        
        </button>
      </div>
    </div>
  );
}

export default Navbar;