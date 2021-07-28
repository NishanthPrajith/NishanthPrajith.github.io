
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

    const testVar = {
        "initial" : {
            height: "0",
        },
        "animate": {
            height: "100vh",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            transition: {
                default: {duration: 2.3}
            },
            transitionEnd: {
                opacity: "0",
                display: "none"
            }
        }
    }

    const testVarTwo = {
        "initial" : {
            height: "0",
        },
        "animate": {
            height: "100vh",
            borderBottomLeftRadius: "0%",
            borderBottomRightRadius: "0%",
            transition: {
                default: {delay: 0.3, duration: 2}
            },
            transitionEnd: {
                display: "none"
            }
        }
    }

    return (
        <div>
            {/* <div className = "divloader">
                <motion.ul variants = {pageAnimation} initial = "initial" animate = "final" exit = "exit">
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
            </div> */}

            <motion.div variants = {testVar} initial = "initial" animate = "animate" className = "testLoader">
            </motion.div>

            <motion.div variants = {testVarTwo} initial = "initial" animate = "animate" className = "testLoaderTwo">
            </motion.div>

        </div>
    );
}

export default MoveFrom;