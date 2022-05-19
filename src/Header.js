import React, {useState} from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {GiHamburgerMenu } from "react-icons/gi"


const Header = () => {
  const [showMediaIcons, setShowMediaIcons] =useState(false);
 
  return (
   
    <div className="header-css">
    <nav className="main-header">
    <div className="logo">
    <button>SNOWSPORTS OFFERS</button></div>
    
    <div className={showMediaIcons? "header-links links-mobile-header" : "header-links"} >
    <ul className="links-desktop">
    <li> <a href=""> MENS
    </a>
    </li>
    <li>
    <a href=""> WOMENS
    </a></li>
    <li>
    <a href=""> KIDS
    </a></li>
    <li>
    <a href=""> BRANDS
    </a></li>
    <li>
    <a href=""> SKI
    </a></li>
    <li>
    <a href=""> TENNIS
    </a></li>
    <li>
    <a href=""> RUNNING
    </a></li>
    <li>
    <a href=""> FOOTWEAR
    </a></li>
    <li>
    <a href=""> EQUIPMENTS
    </a></li>
    <li>
    <a href=""> OTHER SPORTS
    </a></li>
    </ul>

    <div className="hamburger-menu-header" onClick={() => setShowMediaIcons(!showMediaIcons)}>
    <a href=""> <GiHamburgerMenu/></a></div>
    </div>




    </nav>


    </div>
  )
}

export default Header