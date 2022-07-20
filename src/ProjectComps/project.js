
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
                <title>Projects Page • Nishanth Prajith</title>
            </Helmet>
            <motion.div variants = {animation} initial = "initial" animate = "final">
                <div className = "headerLanding">
                    <div>
                        <h1>Collection of all my projects.</h1>
                    </div>
                </div>
                <div className = "listofProjects">

                    <div className='heading'>
                        <div className='headers'>
                            <p>PROJECT NAME</p>
                            <p>TAGS</p>
                        </div>

                        <hr className='stripe'></hr>
                    </div>

                    <div>
                        {
                            data.map((project, index) => {
                                return (
                                    <div>
                                        <Link to = {"/projects/" + (index + 1)} onClick = { changeCursor }>
                                            <motion.div variants = {hoverProjectAnimation} onMouseEnter={() => cursorChangeHandler("project")} onMouseLeave={() => cursorChangeHandler("")} initial = "initial" whileHover = "animate" className = "individualProject">
                                                <h1>{project.title}</h1>
                                                <p>{project.tags}</p>
                                            </motion.div>
                                        </Link>
                                        <hr className='stripe'></hr>
                                    </div>
                                );
                            })   
                        }
                    </div>
                </div>

            </motion.div>
        </div>
    )
}
