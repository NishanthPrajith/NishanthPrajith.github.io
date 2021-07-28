import './navbar.css';
import { useState } from 'react';
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

    const animation = {
        "initial" : {
            opacity: 0,
        },
        "final" : {
            opacity: 1,
            transition: {
                ease: "easeIn",
                default: { delay: 2, duration: 1 },
            },
        },
    }

    return (
        <motion.nav variants = {animation} initial = "initial" animate = "final">
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
        </motion.nav>
    )
}