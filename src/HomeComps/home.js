import { motion } from "framer-motion";
import './home.css';
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

export default function Home() {

    const animation = {
        "initial" : {
            opacity: 0,
        },
        "final" : {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                default: { delay: 0.5, duration: 1 },
            },
        },
    }

    const hoverMailAnimation = {
        "hover": {
            width: "14.1rem"
        }
    }

    function runFunction() {
        window.scroll(0, 0);
    }

    const slideOne = {
        "initial" : {
            x: "-6vw",
        },
        "final" : {
            x: 0,
            transition: {
                ease: "easeInOut",
                default: { delay: 1, duration: 1 },
            },
        },
    }

    const slideTwo = {
        "initial" : {
            x: "-12vw"
        },
        "final" : {
            x: 0,
            transition: {
                ease: "easeInOut",
                default: { delay: 1.5, duration: 1 },
            },
        },
    }

    const expand = {
         "initial" : {
            width: "0%",
        },
        "final" : {
            width: "80%",
            transition: {
                ease: "easeInOut",
                default: { delay: 0.5, duration: 1 },
            },
            transitionEnd: {
                width: "80%",
            }
        },
    }

    const slideThree = {
        "initial" : {
            x: "-18vw",
        },
        "final" : {
            x: 0,
            transition: {
                ease: "easeInOut",
                default: { delay: 2, duration: 1 },
            },
        },
    }


    return (
        <div> 
            <Helmet>
                <title>Home Page | Nishanth Prajith</title>
            </Helmet>
            <motion.div className = "mainContainer" variants = {animation} initial = "initial" animate = "final">
                <div className = "landingPage">
                    <div className = "intro">
                        <p>University Student & <br/>
                            aspiring Data Scientist </p>
                        <h1>Nishanth Prajith</h1>
                    </div>

                    <div className = "imageOne"></div>
                    <motion.div variants = {slideOne} initial = "initial" animate = "final" className = "imageTwo"></motion.div>
                    <motion.div variants = {slideTwo} initial = "initial" animate = "final" className = "imageThree"></motion.div>
                    <motion.div variants = {slideThree} initial = "initial" animate = "final" className = "imageFour"></motion.div>

                    <motion.div variants = {expand} initial = "initial" animate = "final" className = "verticalBar">
                    </motion.div>

                    <p className = "headerTag">Personal Portfolio 2021</p>
                    
                </div>

                <div className = "featuredProjects">
                    <h1>selected</h1>
                    <h1>projects</h1>

                    <div>

                    </div>


                    <div className = "buttonLinkContainer">
                        <Link to = '/projects' onClick = {runFunction}>
                            <button>
                                View all Projects
                            </button>
                        </Link>
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