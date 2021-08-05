import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import MoveFrom from '../loading/pageLoading/pageChange'
import './projectId.css'
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";
import ErrorPage from '../404Error'
import { Link } from "react-router-dom";

import data from './data.json'

import one from '../images/one.png'
import two from '../images/two.png'
import three from '../images/three.png'
import four from '../images/four.png'
import six from '../images/six.png'
import seven from '../images/seven.png'
import eight from '../images/eight.png'
import nine from '../images/nine.png'
import ten from '../images/ten.png'


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

    if (id < 1 || id > (data.length)) {
        return (
            <ErrorPage />
        )
    }

    function nextProject() {
        if (id < data.length) {
            return (
                <div className = "nextProject">
                    <Link to = {"/projects/" + next}>
                        Next Project
                    </Link>
                </div>
            );
        } else {
            return
        }
    }

    var imageLinkArray = [one, two, three, four, "", six, seven, eight, nine, ten]
    function imageLink() {
        return imageLinkArray[id - 1];
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

                <div className = "portfolioImage" style = {{ backgroundImage : "url(" + imageLink() + ")", backgroundSize: data[id - 1].size, backgroundColor : data[id - 1].imageColor }}>             
                </div>

                <div className = "TwoColumns">
                    <div className = "title">
                        <p>Project <br />Description</p>
                    </div>  
                    <div className = "projectDesc">
                        <div className = "desc">
                            <p>{ data[id - 1].desc }</p>
                        </div>
                        { data[id - 1].projectLink && 
                            <div className = "projectlink">
                                <a href = { data[id - 1].link } target = "_blank"> Launch Project </a> 
                            </div>
                        }
                    </div>
                </div>

                { data[id - 1].videoCondition && <p className = "videoTitle">Video</p>}
                { data[id - 1].videoCondition && 
                    <div className = "videoContainer">
                    </div>
                }

                { nextProject() }
            </motion.div>
        </div>
    );
};






















