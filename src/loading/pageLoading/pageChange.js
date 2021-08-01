
import './pageChange.css'
import { motion } from 'framer-motion'


function MoveFrom() {


    const circle = {
        "initial" : {
            width: "0vh",
            height: "0vh",
        },
        "animate": {
            width: "200vh",
            height: "200vh",
            transition: {
                default: {delay: 0.1, duration: 1},
                ease : [0.6, 0.01, -0.05, 0.95]
            },
            transitionEnd: {
                display: "none"
            }
        }
    }

    const CircleTwo = {
        "initial" : {
            width: "0vh",
            height: "0vh",
        },
        "animate": {
            width: "200vh",
            height: "200vh",
            transition: {
                default: {duration: 1},
                ease : [0.6, 0.01, -0.05, 0.95]
            },
            transitionEnd: {
                display: "none"
            }
        }
    }


    return (
        <div className = "placeholder">
            <motion.div className = "background" variants = {CircleTwo} initial = "initial" animate = "animate">
            </motion.div>
            <motion.div className = "circle" variants = {circle} initial = "initial" animate = "animate">

            </motion.div>

        </div>
    );
}

export default MoveFrom;