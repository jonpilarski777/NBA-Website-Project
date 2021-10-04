import React from 'react';
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "5px 12px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    borderRadius:"25px",
    color: "white",
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
