import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/"> Vending Machine</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/pop">Pop</NavLink>
            <NavLink exact to="/sardines">Sardines</NavLink>

        </nav>
    );
}

export default Navbar;