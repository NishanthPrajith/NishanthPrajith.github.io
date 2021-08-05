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
import Footer from './footerComps/footer'
import ProjectId from './individualProject/projectId'
import ErrorPage from './404Error'

import DotRing from "./RecycleComps/DotRing/DotRing";

import { AnimatePresence } from 'framer-motion';

import React, { useEffect, useRef } from "react";

import useWindowSize from "./hooks/useWindowSize";


function App() {
  const location = useLocation();

  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.15,
    current: 0,
    previous: 0,
    rounded: 0
  };

  var current = "";



  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  });

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };
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

    if (location.pathname !== current) {
      setBodyHeight();
      console.log("checked");
      current = location.pathname;
    }
    
  };

  return (
    <div ref = {app} className="App">
      <DotRing />
      <NavBar></NavBar>
      <div className = "scroll" ref = {scrollContainer}>
        <AnimatePresence>
          <Switch location = {location} key = {location.key}>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route exact path = "/about">
              <MoveFrom />
              <About />
            </Route>
            <Route exact path = "/projects/:projectId" render={ProjectId}/>
            <Route path = "/projects">
              <MoveFrom /> 
              <Project />
            </Route>
            <Route exact path = "/contactme">
              <MoveFrom />
              <Contact />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />    
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