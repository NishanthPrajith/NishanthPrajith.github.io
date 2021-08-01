
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useContext} from "react";
import './project.css'
import { MouseContext } from "../context/mouse-context";


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
                        <motion.div variants = {hoverProjectAnimation} initial = "initial" whileHover = "animate" className = "individualProject" 
                        onMouseEnter={() => cursorChangeHandler("projectOne")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                            <div>
                                <h1>Music App UI</h1>
                                <p>UI - Flutter - Dribble</p>
                            </div>
                            <div>
                                <motion.div variants = {hoverchild}>
                                    <p> > </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <hr />

                        <motion.div variants = {hoverProjectAnimation} initial = "initial" whileHover = "animate" className = "individualProject" 
                        onMouseEnter={() => cursorChangeHandler("projectTwo")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                            <div>
                                <h1>Music App UI</h1>
                                <p>UI - Flutter - Dribble</p>
                            </div>
                            <div>
                                <motion.div variants = {hoverchild}>
                                    <p> > </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <hr />

                        <motion.div variants = {hoverProjectAnimation} initial = "initial" whileHover = "animate" className = "individualProject" 
                        onMouseEnter={() => cursorChangeHandler("projectOne")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                            <div>
                                <h1>Music App UI</h1>
                                <p>UI - Flutter - Dribble</p>
                            </div>
                            <div>
                                <motion.div variants = {hoverchild}>
                                    <p> > </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <hr />

                        <motion.div variants = {hoverProjectAnimation} initial = "initial" whileHover = "animate" className = "individualProject" 
                        onMouseEnter={() => cursorChangeHandler("projectTwo")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                            <div>
                                <h1>Music App UI</h1>
                                <p>UI - Flutter - Dribble</p>
                            </div>
                            <div>
                                <motion.div variants = {hoverchild}>
                                    <p> > </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <hr />
                    </div>

                    <div>
                        <motion.div variants = {hoverProjectAnimation} initial = "initial" whileHover = "animate" className = "individualProject" 
                        onMouseEnter={() => cursorChangeHandler("projectOne")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                            <div>
                                <h1>Music App UI</h1>
                                <p>UI - Flutter - Dribble</p>
                            </div>
                            <div>
                                <motion.div variants = {hoverchild}>
                                    <p> > </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <hr />

                        <motion.div variants = {hoverProjectAnimation} initial = "initial" whileHover = "animate" className = "individualProject" 
                        onMouseEnter={() => cursorChangeHandler("projectTwo")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                            <div>
                                <h1>Music App UI</h1>
                                <p>UI - Flutter - Dribble</p>
                            </div>
                            <div>
                                <motion.div variants = {hoverchild}>
                                    <p> > </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <hr />

                        <motion.div variants = {hoverProjectAnimation} initial = "initial" whileHover = "animate" className = "individualProject" 
                        onMouseEnter={() => cursorChangeHandler("projectOne")}
                        onMouseLeave={() => cursorChangeHandler("")}>
                            <div>
                                <h1>Music App UI</h1>
                                <p>UI - Flutter - Dribble</p>
                            </div>
                            <div>
                                <motion.div variants = {hoverchild}>
                                    <p> > </p>
                                </motion.div>
                            </div>
                        </motion.div>

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