import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <nav>

       <Link to="/" className="nav-link"><h3>Logo</h3></Link>

       <ul className="nav-links">
      
      <Link to="/about" className="nav-link"> <li>About</li> </Link>
      <Link to="/shop" className="nav-link"> <li>Shop</li> </Link>
      <Link to="/contacts" className="nav-link"> <li>Contacts</li> </Link>
              
      </ul>
    </nav>
  );
}

export default Nav;
