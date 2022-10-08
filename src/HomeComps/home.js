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
                default: { delay: 1.5, duration: 1 },
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
                <title>Home Page • Nishanth Prajith</title>
            </Helmet>
            <motion.div className = "mainContainer" variants = {animation} initial = "initial" animate = "final">
                <div className = "landingPage">
                    <div className = "intro">
                        <p>University Student & <br/>
                            aspiring Software Engineer </p>
                        <h1>Nishanth <span>Prajith</span></h1>
                    </div>
                </div>

                <div className = "descHome">
                    <p>
                        Learning Software Engineering and Data Science by working on
                        projects that help me learn new things and make my skills even
                        sharper.
                    </p>
                </div>

                <div className = "featuredProjects">
                    <h1>selected</h1>
                    <h1>projects</h1>

                    <div className="wrapper">
                        <Link to={"/projects/2"} onClick={runFunction} className = "projectOne">
                            <div>
                                <p>Machine Learning - Python - pandas - numpy - scikit-learn</p>
                                <h2>California Wildfire Detection</h2>
                            </div>
                        </Link>

                        <Link to={"/projects/1"} onClick={runFunction} className = "projectTwo">
                            <div>
                                <p>UI - Flutter - Machine Learning - PyTorch - Firebase</p>
                                <h2>Car Detection App</h2>
                            </div>
                        </Link>

                        <Link to={"/projects/3"} onClick={runFunction} className = "projectThree">
                            <div>
                                <p>Firebase - React.js - HTML - CSS - Javascript</p>
                                <h2>E-commerce website</h2>
                            </div>
                        </Link>
                    </div>

                    <div className = "buttonLinkContainer">
                        <Link to = '/projects' onClick = {runFunction}>
                            View all Projects
                        </Link>
                    </div>
                </div>
                
            </motion.div>
        </div>
    )
}
