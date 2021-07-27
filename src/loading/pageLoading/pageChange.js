
import './pageChange.css'
import { motion } from 'framer-motion'


function MoveFrom() {

    const pageAnimation = {
        "initial" : {
            height: "100vh",
            opacity: 1,
        },
        "final" : {
            height: "100vh",
            alignItems: "flex-start",
            opacity: 0,
            transition: {
                ease: "easeInOut",
                staggerChildren: 0.3,
                default: { delay: 1.5, duration: 1 },
            },
        },
    }
    const item = {
        "initial": { 
            height: "0vh" 
        },
        "final": { 
            height: "100vh",
            transition: {
                ease: "easeInOut",
            },
        },
    }

    return (
        <div className = "divloader">
            <motion.ul variants = {pageAnimation} initial = "initial" animate = "final">
                <motion.li variants = {item}></motion.li>
                <motion.li variants = {item}></motion.li>
                <motion.li variants = {item}></motion.li>
                <motion.li variants = {item}></motion.li>
                <motion.li variants = {item}></motion.li>
            </motion.ul>
        </div>
    );
}

export default MoveFrom;