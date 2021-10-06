import React from 'react';
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "55px",
    padding: "5px 12px",
    margin: "0 20px 0 -1px",
    background: "white",
    textDecoration: "none",
    borderRadius:"25px",
    color: "black",
    textAlign: "center"
  };


function NavBar() {
    return (
       <div>
            <NavLink to="/" exact style={linkStyles}>Home</NavLink>
            <NavLink to="/teams" exact style={linkStyles}>Teams</NavLink>
            <NavLink to="/bracket" exact style={linkStyles}>Bracket</NavLink>
       </div>

    );
}

export default NavBar;
