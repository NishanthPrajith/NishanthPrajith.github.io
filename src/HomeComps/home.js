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
                default: { delay: 4, duration: 1 },
            },
        },
    }


    return (
        <div> 
            <Helmet>
                <title>Home Page | Nishanth Prajith</title>
            </Helmet>
            <motion.div className = "mainContainer" variants = {animation} initial = "initial" animate = "final">
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>

                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>

                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>

                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>

                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>

                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>

                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>

                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
                <p>Home Page</p>
            </motion.div>
        </div>
    )
}