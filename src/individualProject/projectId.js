import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import MoveFrom from '../loading/pageLoading/pageChange'
import './projectId.css'
import ErrorPage from '../404Error'
import { Link } from "react-router-dom";

import data from './data.json'

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

    function moveHover(index, type) {
        if (type) {
            var v = document.getElementsByClassName("descriptiveText")[index]
            v.style.display = "block";
        } else {
            var v = document.getElementsByClassName("descriptiveText")[index]
            v.style.display = "none";
        }
    }

    return (
        <div>
            <MoveFrom />
            <motion.div variants = {animation} initial = "initial" animate = "final" className = "projectIdPage">

                <div className = "titleContainer">
                    <div>
                        <p>{ data[id - 1].tags }</p>
                        <h1 style={{marginBottom: "7vh"}}>{ data[id - 1].title }</h1>
                        <Link to = {"/projects"} onClick = { changeCursor }>
                            Go back to all projects
                        </Link>
                    </div>
                </div>

                <div className = "portfolioImage" style = {{ backgroundImage : "url(/images" + data[id - 1].imageLink + ")", backgroundColor : data[id - 1].imageColor }}>             
                </div>

                <div className = "TwoColumns">
                    {data[id - 1].projectStatus && <div className = "title">
                        <p>Project <br />Status</p>
                    </div> }
                    {data[id - 1].projectStatus && <div>
                        <div>
                            <p><i>{ data[id - 1].projectStatus }</i></p>
                        </div> 
                    </div> }
                    {data[id - 1].projectStatus && 
                    <div className = "box">
                    </div> }
                    {data[id - 1].projectStatus && 
                    <div className = "box">
                    </div> }
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
                            <p>
                            {
                                data[id - 1].language.map((language, index) => {
                                    return (
                                        <span style={(index > 0) ? {marginLeft: "5%"} : {}} key = {index}>{ language }</span>
                                    )
                                })
                            }
                            </p>
                        </div>
                        <div className='projectLinks'>
                        { data[id - 1].projectLink && 
                            <div className = "projectlink">
                                <a href = { data[id - 1].link } target = "_blank" rel="noreferrer noopener"> Launch Project </a> 
                            </div>
                        }
                        { data[id - 1].weblink && 
                            <div className = "projectlink">
                                <a href = { data[id - 1].weblink } target = "_blank" rel="noreferrer noopener">Website Link </a> 
                            </div>
                        }
                        { data[id - 1].bloglink && 
                            <div className = "projectlink">
                                <a href = { data[id - 1].bloglink } target = "_blank" rel="noreferrer noopener">Blog Link </a> 
                            </div>
                        }
                        { data[id - 1].mlLink && 
                            <div className = "projectlink">
                                <a href = { data[id - 1].mlLink } target = "_blank" rel="noreferrer noopener">ML models Link </a> 
                            </div>
                        }
                        </div>
                    </div>
                </div>

                { data[id - 1].otherImages && <p className = "videoTitle">Images</p>}
                { data[id - 1].otherImages && 
                <div className='imageContainer'>
                    {
                        data[id - 1].otherImages.map((info, index) => {
                            return (
                                <div style={{backgroundColor: info.color, height: "60vh", borderRadius: "5px", backgroundImage: "url(/images/" + info.image + ")", backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat", backgroundPosition: "center", display: "grid", alignContent: "flex-end"}}>
                                </div>
                            );
                            })
                    }   
                </div> }

                { data[id - 1].videoCondition && <p className = "videoTitle">Video</p>}
                { data[id - 1].videoCondition && 
                    <div className = "videoContainer" style = {{backgroundImage : "url(/images" + data[id - 1].videoLink + ")", backgroundColor : data[id - 1].imageColor }}>
                    </div>
                }

                { nextProject() }
            </motion.div>
        </div>
    );
};






















