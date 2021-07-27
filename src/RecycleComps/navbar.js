import './navbar.css';
import { useState } from 'react';
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";
import { Link } from "react-router-dom";

export default function NavBar() {
    
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const [navBarClicked, setClicked] = useState(false);

    function openNav() {
        console.log("Opened");
        console.log(navBarClicked);
        setClicked(true);
    }

    function closeNav() {
        setClicked(false); 
    }

    return (
        <nav>
            <div className = "logo">
                <p>np.</p>
            </div>
            <div className = "hamburger">
                <div className={navBarClicked ? "main" : ""}>
                    <div className={navBarClicked ? "sidenav" : "sidenavNone"}>
                        <div>
                            <p className = "text">Menu</p>
                            <Link to = '/' onClick = {closeNav}>
                                <p className = "links">Home</p>
                            </Link>
                            <Link to = '/about' onClick = {closeNav}>
                                <p className = "links">About Me</p>
                            </Link>
                            <Link to = '/'>
                                <p className = "links" onClick = {closeNav}>Home</p>
                            </Link>
                            <Link to = '/'>
                                <p className = "links" onClick = {closeNav}>Home</p>
                            </Link>
                            
                        </div>
                    </div>
                </div>

                <div onMouseEnter={() => cursorChangeHandler("nav")}
          onMouseLeave={() => cursorChangeHandler("")}>
                    <div onClick={navBarClicked ? closeNav : openNav} className = {navBarClicked ? "menuActive" : "menu"}>
                        <div className = "line"></div>
                        <div className = "line"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}