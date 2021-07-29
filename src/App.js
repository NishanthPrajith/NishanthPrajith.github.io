import './App.css';
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import MainLoader from './loading/main/mainloader';
import MoveFrom from './loading/pageLoading/pageChange';

import NavBar from './RecycleComps/navbar';
import Home from './HomeComps/home';
import About from './AboutComps/about';
import Project from './ProjectComps/project'
import Contact from './ContactComps/contact'

import DotRing from "./RecycleComps/DotRing/DotRing";

import { AnimatePresence } from 'framer-motion';
import { version } from 'react-dom';

import React, { useEffect, useRef } from "react";

import useWindowSize from "./hooks/useWindowSize";


function App() {
  const location = useLocation();

  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.


  //Set the height of the body to the height of the scrolling div

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div className="App">
      <DotRing />
      <NavBar></NavBar>
      <div ref = {scrollContainer} className="scroll">
        <AnimatePresence>
          <Switch location = {location} key = {location.key}>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/about">
              <MoveFrom />
              <About />
            </Route>
            <Route path = "/projects">
              <MoveFrom />
              <Project />
            </Route>
            <Route path = "/contactme">
              <MoveFrom />
              <Contact />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
      <Version versionNumber = {"v1.0"} />
    </div>
  );
}

export default App;


const Version = ({ versionNumber } ) => {
  return (
    <div className = "versionNumber">
      <p>{ versionNumber }</p>
    </div>
  );
}