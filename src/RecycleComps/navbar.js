import './navbar.css';
import { useState } from 'react';
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";
import { Link } from "react-router-dom";
import { motion, AnimatePresence} from "framer-motion";

export default function NavBar() {
    
    const {cursorType, cursorChangeHandler } = useContext(MouseContext);
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

    return (
        <motion.nav variants = {animation} initial = "initial" animate = "final">
            <div className = "logo">
                <p>np.</p>
            </div>
            <div className = "hamburger">
                <div className={navBarClicked ? "mainMain" : ""}>
                    <div className={navBarClicked ? "sidenav" : "sidenavNone"}>
                        <div>
                            <p className = "text">Menu</p>
                            <Link to = '/' onClick = {closeNav}>
                                <div className = "marque">
                                    <p className = "links">Home<br></br> Home</p>
                                </div>
                            </Link>
                            <Link to = '/about' onClick = {closeNav}>
                                <div className = "marque">
                                    <p className = "links">About Me<br></br> About Me</p>
                                </div>
                            </Link>
                            <Link to = '/projects' onClick = {closeNav}>
                                <div className = "marque">
                                    <p className = "links">Projects<br></br> Projects</p>
                                </div>
                            </Link>
                            <Link to = '/contactme' onClick = {closeNav}>
                                <div className = "marque">
                                    <p className = "links">Contact Me<br></br> Contact Me</p>
                                </div>
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