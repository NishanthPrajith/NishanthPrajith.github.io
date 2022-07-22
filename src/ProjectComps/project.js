
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useContext, useEffect, useState } from "react";
import './project.css'
import { MouseContext } from "../context/mouse-context";
import { Link } from "react-router-dom";

import data from '../individualProject/data.json';


export default function Project() {

    const {cursorType, cursorChangeHandler } = useContext(MouseContext);
    
    const [selection, setSelection] = useState(0);

    const [projectData, setProjectData] = useState(data);

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

    function filterSelection(select) {
        setSelection(select);
        if (select == 0) {
            setProjectData(data);
        } else if (select == 1) {
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].id.length; j++) {
                    if (data[i].id[j] == "Data Science") {
                        arr.push(data[i]);
                        break;
                    }
                }
            }
            setProjectData(arr);
        } else if (select == 2) {
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].id.length; j++) {
                    if (data[i].id[j] == "Software Engineering") {
                        arr.push(data[i]);
                        break;
                    }
                }
            }
            setProjectData(arr);
        } else {
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].id.length; j++) {
                    if (data[i].id[j] == "Machine Learning") {
                        arr.push(data[i]);
                        break;
                    }
                }
            }
            setProjectData(arr);
        }
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
                    <div className='filters'>
                        <p className = {selection == 0 ? "": "btn10"} onClick = {() => {filterSelection(0)}} style={selection == 0 ? {backgroundColor: "#1C1D20", color: "white"} : {}}>All</p>
                        <p className = {selection == 1 ? "": "btn10"} onClick = {() => {filterSelection(1)}} style={selection == 1 ? {backgroundColor: "#1C1D20", color: "white"} : {}}>Data Science<sup>3</sup></p>
                        <p className = {selection == 2 ? "": "btn10"} onClick = {() => {filterSelection(2)}} style={selection == 2 ? {backgroundColor: "#1C1D20", color: "white"} : {}}>Software Engineering<sup>3</sup></p>
                        <p className = {selection == 3 ? "": "btn10"} onClick = {() => {filterSelection(3)}} style={selection == 3 ? {backgroundColor: "#1C1D20", color: "white"} : {}}>Machine Learning<sup>2</sup></p>
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
                            projectData.map((project, index) => {
                                return (
                                    <div>
                                        <Link to = {"/projects/" + (project.index)} onClick = { changeCursor }>
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
