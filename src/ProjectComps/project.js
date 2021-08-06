
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useContext} from "react";
import './project.css'
import { MouseContext } from "../context/mouse-context";
import { Link } from "react-router-dom";


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
                        <Link to = "/projects/1" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject">
                                <div>
                                    <h1>Music App UI</h1>
                                    <p>UI - Flutter</p>
                                </div>
                                <div>
                                    <motion.div variants = {hoverchild}>
                                        <p> > </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>

                        <hr />

                        <Link to = "/projects/3" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject" >
                                <div>
                                    <h1>Google Maps App UI</h1>
                                    <p>UI - Flutter</p>
                                </div>
                                <div>
                                    <motion.div variants = {hoverchild}>
                                        <p> > </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>

                        <hr />

                        <Link to = "/projects/5" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject" >
                                <div>
                                    <h1>Password Reveal UI</h1>
                                    <p>UI - Flutter - Instagram - Animation</p>
                                </div>
                                <div>
                                    <motion.div variants = {hoverchild}>
                                        <p> > </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>

                        <hr />

                        <Link to = "/projects/7">
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject">
                                <div>
                                    <h1>Nature App UI</h1>
                                    <p>UI - Flutter - Dribble - Transition - Animation</p>
                                </div>
                                <div>
                                    <motion.div variants = {hoverchild}>
                                        <p> > </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>

                        <hr />

                        <Link to = "/projects/9" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject">
                                <div>
                                    <h1>Image Uploader Program</h1>
                                    <p>Python - Github</p>
                                </div>
                                <div>
                                    <motion.div variants = {hoverchild}>
                                        <p> > </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>

                        <hr />

                        <Link to = "/projects/11" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject" >
                                <div>
                                    <h1>Recycle App UI</h1>
                                    <p>UI - Flutter</p>
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

                    <div>
                        <Link to = "/projects/2" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject" >
                                <div>
                                    <h1>Food App UI</h1>
                                    <p>UI - Flutter - Dribble</p>
                                </div>
                                <div>
                                    <motion.div variants = {hoverchild}>
                                        <p> > </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>

                        <hr />

                        <Link to = "/projects/4" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject" >
                                <div>
                                    <h1>Events App UI</h1>
                                    <p>UI - Flutter - Animation</p>
                                </div>
                                <div>
                                    <motion.div variants = {hoverchild}>
                                        <p> > </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>

                        <hr />

                        <Link to = "/projects/6" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject" >
                                <div>
                                    <h1>Marathon Finder UI</h1>
                                    <p>UI - Flutter - Dribble - Web app</p>
                                </div>
                                <div>
                                    <motion.div variants = {hoverchild}>
                                        <p> > </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>

                        <hr />

                        <Link to = "/projects/8" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject" >
                                <div>
                                    <h1>Fluid Card UI</h1>
                                    <p>UI - Flutter - Dribble - Transition - Animation</p>
                                </div>
                                <div>
                                    <motion.div variants = {hoverchild}>
                                        <p> > </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>

                        <hr />

                        <Link to = "/projects/10" onClick = { changeCursor }>
                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject" >
                                <div>
                                    <h1>Convex Hull Visualization</h1>
                                    <p>Convex Hull - HTML - CSS - JS</p>
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

                </div>


                <div className = "emailRequest">
                    <div>
                        <h1>Have a project idea? <br></br>Contact me.</h1>
                        <motion.div variants = {hoverMailAnimation} whileHover = "hover" className = "buttonFillOne">
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