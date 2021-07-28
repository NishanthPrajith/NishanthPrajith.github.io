
import './pageChange.css'
import { motion } from 'framer-motion'


function MoveFrom() {


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
        },
    }

    const testVarThree = {
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
                display: "none"
            }
        },
    }

    return (
        <div>
            <motion.div variants = {testVar} initial = "initial" animate = "animate" className = "testLoader">
            </motion.div>

            <motion.div variants = {testVarThree} initial = "initial" animate = "animate" className = "testLoaderThree">
            </motion.div>

            <motion.div variants = {testVarTwo} initial = "initial" animate = "animate" className = "testLoaderTwo">
            </motion.div>

        </div>
    );
}

export default MoveFrom;