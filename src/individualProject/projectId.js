import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import MoveFrom from '../loading/pageLoading/pageChange'
import './projectId.css'
import ErrorPage from '../404Error'
import { Link } from "react-router-dom";

import data from './data.json'

import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'
import five from '../images/five.png'
import six from '../images/six.png'
import seven from '../images/seven.png'
import eight from '../images/eight.png'
import nine from '../images/nine.png'
import ten from '../images/ten.png'

import fourVideo from '../video/four.gif'
import fiveVideo from '../video/five.gif'
import sevenVideo from '../video/seven.gif'
import eightVideo from '../video/eight.gif'
import tenVideo from '../video/ten.gif'

export default function ProjectId ({match}) {

    const id = match.params.projectId;
    const next = parseInt(id) + 1;

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

    function changeCursor() {
        window.scroll(0, 0);
    }

    if (id < 1 || id > (data.length)) {
        return (
            <ErrorPage />
        )
    }

    function nextProject() {
        if (id < data.length) {
            return (
                <div className = "nextProject">
                    <Link to = {"/projects/" + next} onClick = { changeCursor }>
                        Next Project
                    </Link>
                </div>
            );
        } else {
            return
        }
    }

    var imageLinkArray = [one, two, three, four, five, six, seven, eight, nine, ten]
    var videoLinkArray = ["", "", "", fourVideo, fiveVideo, "", sevenVideo, eightVideo, "", tenVideo]
    
    function imageLink() {
        return imageLinkArray[id - 1];
    }

    function videoLink() {
        return videoLinkArray[id - 1];
    }

    return (
        <div>
            <MoveFrom />
            <motion.div variants = {animation} initial = "initial" animate = "final" className = "projectIdPage">
                <div className = "titleContainer">
                    <div>
                        <p>{ data[id - 1].tags }</p>
                        <h1>{ data[id - 1].title }</h1>
                    </div>
                </div>

                <div className = "portfolioImage" style = {{ backgroundImage : "url(" + imageLink() + ")", backgroundColor : data[id - 1].imageColor }}>             
                </div>

                <div className = "TwoColumns">
                    <div className = "title">
                        <p>Project <br />Description</p>
                    </div>  
                    <div className = "projectDesc">
                        <div className = "desc">
                            <p>{ data[id - 1].desc }</p>
                        </div>
                    </div>
                    <div className = "box">
                    </div>
                    <div className = "box">
                    </div>
                    <div className = "title">
                        <p>Language or <br/>Framework Used</p>
                    </div>  
                    <div className = "projectDesc">
                        <div className = "desc">
                            <p>{ data[id - 1].language }</p>
                        </div>
                        { data[id - 1].projectLink && 
                            <div className = "projectlink">
                                <a href = { data[id - 1].link } target = "_blank" rel="noreferrer noopener"> Launch Project </a> 
                            </div>
                        }
                    </div>
                </div>

                { data[id - 1].videoCondition && <p className = "videoTitle">Video</p>}
                { data[id - 1].videoCondition && 
                    <div className = "videoContainer" style = {{backgroundImage : "url(" + videoLink() + ")", backgroundColor : data[id - 1].imageColor }}>
                    </div>
                }

                { nextProject() }
            </motion.div>
        </div>
    );
};






















