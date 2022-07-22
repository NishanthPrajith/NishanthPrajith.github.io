
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './contact.css'

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
        <div style = {{overflow: "none"}}>
            <Helmet>
                <title>Contact Me Page • Nishanth Prajith</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Helmet>
            <motion.div variants = {animation} initial = "initial" animate = "final" className = "contact">
                <div style = {{paddingLeft: "5%"}}>
                    <div className="contactInfo">
                        <div>
                            <h1>
                                Get in touch 
                            </h1>
                            <br/>
                            <p className = "message">
                                I am from India, living and studying in the United States of America. Feel
                                free to contact me to say hi or talk about a project. I will do my best to
                                reach out back to you.
                            </p>
                        </div>
                        <div style={{backgroundSize: "contain",backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage : "url(/images/profile_picture.png)"}}>
                           </div>
                    </div>
                    <div className= "projectInfo">  
                        <div className = "info" style={{width: "auto"}}>
                            <p>CONTACT DETAILS</p>
                            <br/>
                            <h3>
                                <a href = "mailto:nishanth.prajith@gmail.com">
                                    nishanth.prajith@gmail.com
                                </a>
                            </h3>
                            <br/>
                            <h3>
                                <a href = "tel:+19294019040">
                                    +1 929 401 9040
                                </a>
                            </h3>
                        </div>
                        <div className='social info'>
                            <p>SOCIALS</p>
                            <br/>
                            <p className='socialmedia'>
                                <a href = "https://www.facebook.com/people/Nishanth-Prajith/100009547906410/" target = "_blank" rel="noreferrer noopener">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a href = "https://www.instagram.com/nishanthprajith/" target = "_blank" rel="noreferrer noopener">
                                    <i class="fa fa-instagram"></i>
                                </a> 
                                <a href = "https://www.linkedin.com/in/nishanth-prajith" target = "_blank" rel="noreferrer noopener">
                                    <i class="fa fa-linkedin"></i>
                                </a> 
                                <a href = "https://github.com/NishanthPrajith" target = "_blank" rel="noreferrer noopener">
                                    <i class="fa fa-github"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </motion.div>
        </div>
    )
}
