
import './about.css'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
                <title>About Me Page | Nishanth Prajith</title>
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
                    <motion.div className = "personalImageOne" ref = {ref} variants = {ImageAnimation} animate = {controls} initial = "initial">
                    </motion.div>
                    <motion.div className = "personalImageTwo" ref = {ref} variants = {ImageAnimation} animate = {controls} initial = "initial">
                    </motion.div>
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
                        <div>
                            <p>2017</p>
                        </div>
                    </div>

                </div>

                <div class="banner">
                    <motion.div class="marqueeText" variants = {rightfade} ref = {refThree} animate = {controlsThree} initial = "initial">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Frontend</span>
                            <span>Backend</span>
                            <span>UI/UX</span>
                        </div>
                    </motion.div>

                    <motion.div class="marqueeText" variants = {leftfade} ref = {refFour} animate = {controlsFour} initial = "initial">
                        <div class="marquee__innerRight" aria-hidden="true">
                            <span>Next.js</span>
                            <span>Flutter</span>
                        </div>
                    </motion.div>

                    <motion.div class="marqueeText" variants = {rightfade} ref = {refFive} animate = {controlsFive} initial = "initial">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Python</span>
                            <span>JAVA</span>
                            <span>C++</span>
                            <span>Dart</span>
                        </div>
                    </motion.div>
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
                        <div>
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
                        <div>
                            <p>2019</p>
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
                        <a href = "mailto:nishanth.prajith@gmail.com">
                            <p className = "button">View Resume &#8594;</p>
                        </a>
                    </motion.div>

                </div>

            </motion.div>
        </div>
    )
}
