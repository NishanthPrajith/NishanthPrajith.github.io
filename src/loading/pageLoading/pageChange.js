
import './pageChange.css'
import { motion } from 'framer-motion'


function MoveFrom() {

    const pageAnimation = {
        "initial" : {
            opacity: "1"
        },
        "final" : {
            opacity: "0",
            transition: {
                ease: "easeInOut",
                staggerChildren: 0.3,
                default: { delay: 2.5, duration: 1 },
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

    const pageAnimationDown = {
        "initial" : {
            opacity: "1"
        },
        "final" : {
            opacity: "0",
            transition: {
                ease: "easeInOut",
                staggerChildren: 0.3,
                delayChildren: 1,
                default: { delay: 2.5, duration: 10 },
            },
        },
    }

    const itemDown = {
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
        <div>
            <div className = "divloader">
                <motion.ul variants = {pageAnimation} initial = "initial" animate = "final">
                    <motion.li variants = {item}></motion.li>
                    <motion.li variants = {item}></motion.li>
                    <motion.li variants = {item}></motion.li>
                    <motion.li variants = {item}></motion.li>
                    <motion.li variants = {item}></motion.li>
                </motion.ul>
            </div>

            <div className = "divloaderDown">
                <motion.ul variants = {pageAnimationDown} initial = "initial" animate = "final">
                    <motion.li variants = {itemDown}></motion.li>
                    <motion.li variants = {itemDown}></motion.li>
                    <motion.li variants = {itemDown}></motion.li>
                    <motion.li variants = {itemDown}></motion.li>
                    <motion.li variants = {itemDown}></motion.li>
                </motion.ul>
            </div>
        </div>
    );
}

export default MoveFrom;