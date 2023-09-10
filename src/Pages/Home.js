import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
       
      <div className="headerContainer">
        <h1> This is the home page </h1>
        </div>
        <div className="headerContainer">
       <Link to="/about">
          <button> About us </button>
        </Link>
        </div>
      
    </div>
  );
}

export default Home;