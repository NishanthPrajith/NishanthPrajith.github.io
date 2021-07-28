
import './about.css'
import { motion } from 'framer-motion';

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


    return (
        <div style = {{overflow: "none"}}>
            <motion.div variants = {animation} initial = "initial" animate = "final">
                <h1>About Page</h1>
            </motion.div>
        </div>
    )
}