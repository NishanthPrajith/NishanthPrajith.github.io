
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

    const hoverMailAnimation = {
        "hover": {
            width: "24vh"
        }
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

                <div className = "resumeInfo">
                    <p className = "resumeTitle">Experience.</p>
                    <div className = "resumeData">
                        <div>
                            <h1> Web Designer </h1>
                        </div>
                        <div>
                            <h2> Thomas A. Edison C.T.E High School, Jamaica, NY </h2>
                            <h3> I maintained the schools website, and updated it with new events and annoucments on a weekly basis. </h3>
                        </div>
                        <div style = {{textAlign: "center"}}>
                            <p>2017</p>
                        </div>
                    </div>

                </div>

                <div class="banner">

                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Frontend</span>
                            <span>Backend</span>
                            <span>UI/UX</span>
                        </div>
                    </div>


                    <div class="marquee">
                        <div class="marquee__innerRight" aria-hidden="true">
                            <span>React</span>
                            <span>Next.js</span>
                            <span>Flutter</span>
                        </div>
                    </div>

                    

                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Python</span>
                            <span>JAVA</span>
                            <span>C++</span>
                            <span>Dart</span>
                        </div>
                    </div>

                </div>

                <div className = "resumeInfo">
                    <p className = "resumeTitle">Education.</p>
                    <div className = "resumeData">
                        <div>
                            <h1> Computer Science </h1>
                        </div>
                        <div>
                            <h2> City College Of New York, New York City, NY </h2>
                            <h3> Currently, studying Computer science at the grove school of engineering. </h3>
                        </div>
                        <div style = {{textAlign: "center"}}>
                            <p>2019</p>
                        </div>
                    </div>

                    <div className = "resumeData">
                        <div>
                            <h1> Web Design </h1>
                        </div>
                        <div>
                            <h2> Thomas A. Edison C.T.E High School, Jamaica, NY </h2>
                            <h3> I studied web developement and graphic design, specically HTML, CSS, Adobe Photoshop and Illustrator. </h3>
                        </div>
                        <div style = {{textAlign: "center"}}>
                            <p>2019</p>
                        </div>
                    </div>
                </div>

                <div className = "resume">
                    <motion.div variants = {hoverMailAnimation} whileHover = "hover" className = "buttonFill">
                        <a href = "mailto:nishanth.prajith@gmail.com">
                            <p className = "button">View Resume &#8594;</p>
                        </a>
                    </motion.div>

                </div>
                
            </motion.div>
        </div>
    )
}