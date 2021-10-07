import React from 'react';
import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "155px",
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
            <NavLink to="/BestTeam" exact style={linkStyles}>Historical Teams</NavLink>
            <NavLink to="/HofVoting" exact style = {linkStyles}>Hall of Fame</NavLink>
       </div>

    );
}

export default NavBar;
