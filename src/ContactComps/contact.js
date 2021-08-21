
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './contact.css'

export default function About() {

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

    const hoverTestAnimation = {
        "initial": {
            width: "50px"
        },
        "hover": {
            width: "10.1rem"
        }
    }


    return (
        <div style = {{overflow: "none"}}>
            <Helmet>
                <title>Contact Me Page | Nishanth Prajith</title>
            </Helmet>
            <motion.div variants = {animation} initial = "initial" animate = "final" className = "contact">
                <div style = {{display: "grid", placeItems: "center"}}>
                    <p className = "header">CONTACT ME</p>
                </div>
                <div style = {{paddingLeft: "5%"}}>
                    <h1>Get in touch. </h1>
                    <p className = "message">
                        I am from India, living and studying in the United States of America. Feel
                        free to conact me to say hi or talk about an project. I will do my best to
                        reach out back to you.
                    </p>
                    <motion.div variants = {hoverTestAnimation} whileHover = "hover" initial = "initial" className = "buttonFill">
                        <a href = "mailto:nishanth.prajith@gmail.com">
                            <p className = "button">Say Hello &#8594;</p>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
