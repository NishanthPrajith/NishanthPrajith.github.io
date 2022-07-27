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

import PersonalPortfolioText from './randomComps/personalPortfolioText'

import DotRing from "./RecycleComps/DotRing/DotRing";

import { AnimatePresence } from 'framer-motion';

import React, { useEffect, useRef, useState } from "react";

import useWindowSize from "./hooks/useWindowSize";


function App() {
  const location = useLocation();

  const [check, setCheck] = useState(false);

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

  useEffect(() => {
    var v = location.pathname;
    if (v === "/" || v === "/home" || v === "/about" || v === "/contactme") {
      setCheck(false);
    } else if (v.includes("/project")) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [location]);



  return (
    <div className="App" style={check ? {backgroundPosition: "bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage : "url(/images/one_error.jpg)"} : {}}>
      <DotRing />
      <NavBar></NavBar>
      
      <div className = "scroll">
        <AnimatePresence>
          <Switch location = {location} key = {location.key}>
            <Route exact path = "/">
              <MoveFrom />
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
      </div>
      <Footer />
      <PersonalPortfolioText />
      <Version versionNumber = {"v2.0"} />
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
