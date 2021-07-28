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
                delay: 1.5, 
                duration: 1,
            },
        },
    }

    const animationTwo = {
        "initial" : {
            width: "0",
            height: "0"
        },
        "final" : {
            width : "50%",
            height: "100%",
            transition: {
                ease: "easeIn",
                delay: 1.5, 
                duration: 4,
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
                    <motion.div className={navBarClicked ? "sidenav" : "sidenavNone"} variants = {animationTwo} initial = "initial" animate = "final">
                        <div>
                            <p className = "text">Menu</p>
                            <Link to = '/' onClick = {closeNav}>
                                <p className = "links">Home</p>
                            </Link>
                            <Link to = '/about' onClick = {closeNav}>
                                <p className = "links">About Me</p>
                            </Link>
                            <Link to = '/projects'>
                                <p className = "links" onClick = {closeNav}>Projects</p>
                            </Link>
                            <Link to = '/contactme'>
                                <p className = "links" onClick = {closeNav}>Contact Me</p>
                            </Link>
                            
                        </div>
                    </motion.div>
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