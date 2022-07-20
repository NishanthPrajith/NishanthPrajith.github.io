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
                            aspiring Data Scientist </p>
                        <h1>Nishanth <span>Prajith</span></h1>
                    </div>
                </div>

                <div className = "descHome">
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
                      <div className = "projectOne">
                        <p>UI - Flutter - Animation</p>
                        <h2> Convex Hull Visualization </h2>
                      </div>
                      <div className = "projectTwo">
                        <p>UI - Flutter - Animation</p>
                        <h2> Events App UI </h2>
                      </div>
                      <div className = "projectThree">
                        <p>UI - Flutter - Dribble - Transition - Animation</p>
                        <h2> Fluid Card UI </h2>
                      </div>
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
