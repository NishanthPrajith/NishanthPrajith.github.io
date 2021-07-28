import './mainLoader.css';
import {motion} from 'framer-motion';
export default function MainLoader() {

    const Topvariants = {
        "initial": {
            height: "50vh"
        },
        "final": {
            height: "0vh",
            transition: {
                type: "ease-in-out",
                default: { delay: 2.5, duration: 2 },
            },
        },
        "done": {
            display: "none"
        }
    };


    const pConstraint = {
        "initial": {
            display: "block"
        },
        "final": {
            display: "block",
            transition: {
                type: "ease-in-out",
                default: { delay: 4, duration: 0 },
            },
            transitionEnd: {
                display: "none"
            }
        }
    }

    return (
        <div>
            <motion.div className = "mainLoaderOne" variants = {Topvariants} initial = "initial" animate = "final" exit = "done">
                <motion.p variants = {pConstraint} initial = "initial" animate = "final">Creativity and Curiosity</motion.p>
            </motion.div>
            <motion.div className = "mainLoaderTwo" variants = {Topvariants} initial = "initial" animate = "final" exit = "done">
                <motion.p variants = {pConstraint} initial = "initial" animate = "final">is what I thrive upon</motion.p>
            </motion.div>
        </div>
    )
}