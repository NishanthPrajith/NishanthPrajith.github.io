import { motion } from "framer-motion";
import './home.css';
import Helmet from "react-helmet";

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

    const slideOne = {
        "initial" : {
            marginRight: "28vw",
        },
        "final" : {
            marginRight: "22vw",
            transition: {
                ease: "easeInOut",
                default: { delay: 1, duration: 1 },
            },
            transitionEnd: {
                marginRight: "22vw",
            }
        },
    }

    const slideTwo = {
        "initial" : {
            marginRight: "28vw",
        },
        "final" : {
            marginRight: "16vw",
            transition: {
                ease: "easeInOut",
                default: { delay: 1.5, duration: 1 },
            },
            transitionEnd: {
                marginRight: "16vw",
            }
        },
    }

    const slideThree = {
        "initial" : {
            marginRight: "28vw",
        },
        "final" : {
            marginRight: "10vw",
            transition: {
                ease: "easeInOut",
                default: { delay: 2, duration: 1 },
            },
            transitionEnd: {
                marginRight: "10vw",
            }
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

                    <div className = "verticalBar">
                    </div>

                    <p className = "headerTag">Personal Portfolio 2021</p>
                    
                </div>
            </motion.div>
        </div>
    )
}