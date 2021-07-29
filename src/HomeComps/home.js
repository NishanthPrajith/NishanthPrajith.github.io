import { motion } from "framer-motion";
import './home.css';

export default function Home() {

    const animation = {
        "initial" : {
            opacity: 0,
        },
        "final" : {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                default: { delay: 4, duration: 1 },
            },
        },
    }


    return (
        <div>
            <motion.div variants = {animation} initial = "initial" animate = "final">
                <p>Home Page</p>
            </motion.div>
        </div>
    )
}