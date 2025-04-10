
import { Link } from "react-router-dom";
import React from 'react';
import "./Navbar.css";

import { IoIosAddCircleOutline } from "react-icons/io";


const Navbar = () => {
  return (
    
    
    <div className="navbar-container">
    <div className="navbar-flex">
      <h1 className="navbar-title">
        <a href="/">Product Store 🛒</a>
      </h1>
  
      <div className="navbar-buttons">
        <a href="/create">
          <button>
          <IoIosAddCircleOutline />
          </button>
        </a>
        
      </div>
    </div>
  </div>
  
   
  )
}

    export default Navbar

