
import './about.css'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Helmet } from 'react-helmet';
import Pdf from '../documents/2.pdf';


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
            width: "14.1rem"
        }
    }

    const ImageAnimation = {
        "initial": {
            height: "0vh"
        },
        "visible": {
            height: "100%",
            transition: {
                ease: "easeInOut",
                default: {duration: 2 },
            },
        }
    }

    const ImageFirstAnimation = {
        "initial": {
            width: "0vh"
        },
        "visible": {
            width: "85%",
            transition: {
                ease: "easeInOut",
                default: {delay: 1.5, duration: 2 },
            },
        }
    }

    const banner = {
        "initial": {},
        "animate": {
            transition: {
                delayChildren: 2,
                staggerChildren: 0.1,
            },
        },
    };

    const letterAnimation = {
        "initial": { opacity: 0},
        "animate": {
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
            },
        },
    };

    const rightfade = {
        "initial": {
            x: 100,
            opacity: 0
        },
        "visible": {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.5
            }
        }
    }

    const leftfade = {
        "initial": {
            x: -100,
            opacity: 0
        },
        "visible": {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.5
            }
        }
    }

    const controls = useAnimation();
    const [ref, inView] = useInView();

    const controlsTwo = useAnimation();
    const [reftwo, inViewtwo] = useInView();

    const controlsThree = useAnimation();
    const [refThree, inViewThree] = useInView();

    const controlsFour = useAnimation();
    const [refFour, inViewFour] = useInView();

    const controlsFive = useAnimation();
    const [refFive, inViewFive] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
    }, [controls, inView]);


    useEffect(() => {
        if (inViewtwo) {
          controlsTwo.start("visible");
        }
    }, [controlsTwo, inViewtwo]);


    useEffect(() => {
        if (inViewThree) {
          controlsThree.start("visible");
        }
    }, [controlsThree, inViewThree]);


    useEffect(() => {
        if (inViewFour) {
          controlsFour.start("visible");
        }
    }, [controlsFour, inViewFour]);

    useEffect(() => {
        if (inViewFive) {
          controlsFive.start("visible");
        }
    }, [controlsFive, inViewFive]);



    return (
        <div>
            <Helmet>
                <title>About Me Page • Nishanth Prajith</title>
            </Helmet>
            <motion.div className = "main" variants = {animation} initial = "initial" animate = "final">

                <div className = "landing">
                    <motion.div className = "title" variants = {banner}
                    initial = "initial" animate = "animate"
                    >
                        <motion.span variants = {letterAnimation}>H</motion.span>
                        <motion.span variants = {letterAnimation}>e</motion.span>
                        <motion.span variants = {letterAnimation}>l</motion.span>
                        <motion.span variants = {letterAnimation}>l</motion.span>
                        <motion.span variants = {letterAnimation}>o</motion.span>
                        <motion.span variants = {letterAnimation}>.</motion.span>
                    </motion.div>
                    <motion.div className = "loadingImage" ref = {reftwo} variants = {ImageFirstAnimation} animate = {controlsTwo} initial = "initial">

                    </motion.div>
                </div>

                <div className = "twoColumns">
                    <div className = "heading">
                        <p>About Me</p>
                    </div>
                    <div className = "context">
                        <p>My name is Nishanth Prajith. I am a Computer Science student from NYC aspiring
                        to be a Data Scientist. I have experience in both front end and back end development.
                        I enjoy learning new things and trying to experiment with different ideas.</p>
                    </div>
                </div>

                <div className = "twoColumnsImages">
                    <motion.div className = "personalImageOne" ref = {ref} variants = {ImageAnimation} animate = {controls} initial = "initial">
                    </motion.div>
                    <motion.div className = "personalImageTwo" ref = {ref} variants = {ImageAnimation} animate = {controls} initial = "initial">
                    </motion.div>
                </div>

                <div className = "twoColumns">
                    <div className = "heading">
                        <p>Experience</p>
                    </div>
                    <div className = "context">
                        <div className = "resumeData">
                            <div>
                                <p> Digital Factory - 2019 </p>
                            </div>
                            <div>
                                <h1> Digital Factory - CUNY Career Launch </h1>
                            </div>
                            <div>
                                <h3>Data Science Intern</h3>
                                <br/>
                                {/* <ul>
                                    <li>Designed, developed, maintained, and updated a variety of websites as assigned keeping in mind the UI/UX requirements.</li>
                                    <li>Oversaw development team to update and maintain the school’s official site and its external client sites.</li>
                                    <li>Updated web style sheets and pages on a regular basis as required.</li>
                                </ul> */}
                            </div>
                            <hr style={{border: "white 1px solid", backgroundColor: "#dfdfdf", height: "0.5px", width: "100%"}} />
                        </div>
                        <div className = "resumeData">
                            <div>
                                <p> Thomas A. Edison C.T.E High School, Jamaica, NY - 2017 </p>
                            </div>
                            <div>
                                <h1> W.B.L (Work-Based Learning) </h1>
                            </div>
                            <div>
                                <h3>Senior Web Design Intern</h3>
                                <br/>
                                <ul>
                                    <li>Designed, developed, maintained, and updated a variety of websites as assigned keeping in mind the UI/UX requirements.</li>
                                    <li>Oversaw development team to update and maintain the school’s official site and its external client sites.</li>
                                    <li>Updated web style sheets and pages on a regular basis as required.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='Language'>
                    <div className = "twoColumns">
                        <div className = "heading">
                            <p style={{color: "#fff"}}>Programming</p>
                        </div>
                        <div className = "context">
                            <div className = "languages">
                                <p>Flutter/Dart</p>
                                <p>C++</p>
                                <p>JAVA</p>
                                <p>Python</p>
                                <p>HTML, CSS</p>
                                <p>Javascript</p>
                                <p>React</p>
                                <p>SQL</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "twoColumns">
                    <div className = "heading">
                        <p>Education</p>
                    </div>
                    <div className = "context">
                        <div className = "resumeData">
                            <div>
                                <p>The City College Of New York, <i>Grove School of Engineering</i>, New York City, NY - 2019 </p>
                            </div>
                            <div>
                                <h1> Computer Science </h1>
                            </div>
                            <div>
                                <h3> Bachelor of Science in Computer Science, GPA: 3.94/4.00</h3>
                                <br/>
                                <p><b>Relevant Courses :</b> <i>Algorithms, Data Structures, Introduction to Applied Mathematical Computation, Software Design Lab, 
                                    Database Systems, Introduction to Data Science, Machine Learning, Software Engineering, Senior Design (Applied Machine Learning), 
                                    Numerical Issues in Scientific Programming, Computational Complexity.</i></p>
                            </div>
                            <hr style={{border: "white 1px solid", backgroundColor: "#dfdfdf", height: "0.5px", width: "100%"}} />
                        </div>
                        <div className = "resumeData">
                            <div>
                                <p> Thomas A. Edison C.T.E High School, Jamaica, NY - 2016 </p>
                            </div>
                            <div>
                                <h1> Web Design </h1>
                            </div>
                            <div>
                                <h3> I studied web developement and graphic design, specically HTML, CSS, Adobe Photoshop and Illustrator. </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "quote">
                    <div>
                        <p>"The important thing is to not stop questioning. Curiosity has its own reason for existing."</p>
                        <p>- Albert Einstein</p>
                    </div>
                </div>

                <div className = "resume"> 
                    <motion.div variants = {hoverMailAnimation} whileHover = "hover" className = "buttonFillEight">
                        <a href = {Pdf} target="_blank">
                            <p className = "button">View Resume &#8594;</p>
                        </a>
                    </motion.div>

                </div>

            </motion.div>
        </div>
    )
}
