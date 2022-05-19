import React, {useState} from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FaUser, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import {GiHamburgerMenu } from "react-icons/gi"


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] =useState(false);
  return (
    <div className="navbar-css">
    <nav className="main-nav">
    <div className="logo">
    <h2>Logo</h2></div>
    
    <div className="menu-link">
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
    </div>
    
 
    
    <div className={showMediaIcons? "links links-mobile-navbar" : "links "} >
    <ul className="links-desktop ">
    <li> <a href=""> <FaUser/>
    </a>
    </li>
    <li>
    <a href=""> <FaRegHeart/>
    </a></li>
    <li>
    <a href=""> <FaShoppingCart/>
    </a></li>
    </ul>
    <div className="hamburger-menu-navbar">
    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
    <GiHamburgerMenu/></a>

    
    </div>


    </div>
    


    </nav>


    </div>
  )
}

export default Navbar