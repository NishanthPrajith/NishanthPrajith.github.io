import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import MoveFrom from '../loading/pageLoading/pageChange'
import './projectId.css'
import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";


export default function ProjectId ({match}) {

    const id = match.params.projectId;

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
        <MoveFrom />
        <motion.div variants = {animation} initial = "initial" animate = "final" className = "projectIdPage">
            <p>
                <strong>User ID: </strong>
                <p> {id} </p>
            </p>
        </motion.div>
    </div>
  );
};
