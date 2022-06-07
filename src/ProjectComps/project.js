
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useContext} from "react";
import './project.css'
import { MouseContext } from "../context/mouse-context";
import { Link } from "react-router-dom";

import data from '../individualProject/data.json';


export default function Project() {

    const {cursorType, cursorChangeHandler } = useContext(MouseContext);

    const animation = {
        "initial" : {
            opacity: 0,
        },
        "final" : {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                default: { delay: 1.5, duration: 1 },
            },
        },
    }

    const hoverMailAnimation = {
        "hover": {
            width: "14.1rem"
        }
    }

    const hoverProjectAnimation = {
        "animate" : {
            transition: {
                type: "ease-in-out",
                duration: 0.2
            }
        },
    }

    const hoverchild = {
        "initial": {
            width: '0px',
            height: '0px'
        },
        'animate': {
            width: "50px",
            height: "50px",
            transition: {
                type: "ease-in-out",
                duration: 0.2
            }

        }
    }

    const fadeIn = {
        "initial": {
            opacity: 0
        },
        "visible": {
            opacity: 1,
            transition: {
                type: "ease-in-out",
                duration: 2
            }
        }
    }

    function changeCursor() {
        cursorChangeHandler("");
        window.scroll(0, 0);
    }

    return (
        <div>
            <Helmet>
                <title>Projects Page | Nishanth Prajith</title>
            </Helmet>
            <motion.div variants = {animation} initial = "initial" animate = "final">
                <div className = "headerLanding">
                    <div>
                        <h1>My Projects</h1>
                        <p>This is a collection of all the projects I have worked on, it includes the ones available publicly on GitHub as well as ones not available on GitHub.</p>
                    </div>
                </div>

                <div className = "listofProjects">
                    <div>
                        {
                            data.map((project, index) => {
                               if (index % 2 == 0) {
                                   return (
                                    <div>
                                        <Link to = {"/projects/" + (index + 1)} onClick = { changeCursor }>
                                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject">
                                                <div>
                                                    <h1>{project.title}</h1>
                                                    <p>{project.tags}</p>
                                                </div>
                                                <div>
                                                    <motion.div variants = {hoverchild}>
                                                        <p> > </p>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                        <hr />
                                    </div>
                                   );
                               }
                            })   
                        }
                    </div>

                    <div>
                        {
                            data.map((project, index) => {
                               if (index % 2 == 1) {
                                   return (
                                    <div>
                                        <Link to = {"/projects/" + (index + 1)} onClick = { changeCursor }>
                                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject">
                                                <div>
                                                    <h1>{project.title}</h1>
                                                    <p>{project.tags}</p>
                                                </div>
                                                <div>
                                                    <motion.div variants = {hoverchild}>
                                                        <p> > </p>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                        <hr />
                                    </div>
                                   );
                               }
                            })   
                        }
                    </div>

                </div>


                <div className = "emailRequest">
                    <div>
                        <h1>Have a project idea? <br></br>Contact me.</h1>
                        <motion.div variants = {hoverMailAnimation} whileHover = "hover" className = "buttonFillThree">
                            <a href = "mailto:nishanth.prajith@gmail.com">
                                <p className = "button">Send an Email &#8594;</p>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
