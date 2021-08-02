import './error.css'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
export default function ErrorPage() {

	const hoverTestAnimation = {
        "initial": {
            width: "50px"
        },
        "hover": {
            width: "9.1rem"
        }
    }

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
		<motion.div variants = {animation} initial = "initial" animate = "final" className = "errorPage">
			<div>
				<h1>404</h1>
				<h2>The page you have been looking for has moved, renamed, deleted, or does not exist!</h2>
				<div className = "buttonDiv">
					<motion.div variants = {hoverTestAnimation} whileHover = "hover" initial = "initial" className = "buttonFill">
	                    <Link to = "/">
	                        <p className = "button">Go Home &#8594;</p>
	                    </Link>
	                </motion.div>
               	</div>
			</div>
		</motion.div>
	);	
}