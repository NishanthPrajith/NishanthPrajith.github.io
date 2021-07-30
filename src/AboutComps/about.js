
import './about.css'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

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
        <div>
            <Helmet>
                <title>About Me Page | Nishanth Prajith</title>
            </Helmet>
            <motion.div variants = {animation} initial = "initial" animate = "final" className = "main">

                <div className = "landing">
                    <h1>Hello.</h1>
                    <div className = "loadingImage">

                    </div>                
                </div>

                <div className = "twoColumns">
                    <div className = "title">
                        <p>About Me</p>
                    </div>  
                    <div className = "context">
                        <p>My name is Nishanth Prajith. I am a Computer Science student from NYC aspiring
                        to be a Data Scientist. I have experience in both front end and back end development.
                        I enjoy learning new things and trying to experiment with different ideas.</p>
                    </div>
                </div>


                <div className = "twoColumnsImages">
                    <div className = "personalImageOne">
                    </div>  
                    <div className = "personalImageTwo">
                    </div>
                </div>
                
            </motion.div>
        </div>
    )
}