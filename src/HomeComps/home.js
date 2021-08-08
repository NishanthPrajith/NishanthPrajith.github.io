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
                        <h1>Nishanth <span>Prajith</span></h1>
                    </div>

                    <p className = "headerTag">Personal Portfolio 2021</p>
                    
                </div>

                <div className = "desc">
                    <p>
                        Learning Data Science and programming by working on 
                        projects that help me learn new things and make my skills even
                        sharper.
                    </p>
                </div>

                <div className = "featuredProjects">
                    <h1>selected</h1>
                    <h1>projects</h1>

                    <div className="wrapper">
                        <div className = "selectedProjectName">
                            <div>
                                <h1>Events App UI</h1>
                                <p>UI - Flutter - Animation</p>
                            </div>
                        </div>
                        <div className = "selectedProjectImage">
                            <Link onClick = {runFunction} to = "/projects/4">
                                <div className = "selectedProjectImageOne">
                                </div>
                            </Link>
                        </div>
                    </div>

                     <div className="wrapper">
                        <div className = "selectedProjectName">
                            <div>
                                <h1>Convex Hull Visualization</h1>
                                <p>Convex Hull - HTML - CSS - JS</p>
                            </div>
                        </div>
                        <div className = "selectedProjectImage">
                            <Link onClick = {runFunction} to = "/projects/10">
                                <div className = "selectedProjectImageTwo">
                                </div>
                            </Link>
                        </div>
                    </div>
                    


                    <div className = "buttonLinkContainer">
                        <Link to = '/projects' onClick = {runFunction}>
                            View all Projects
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