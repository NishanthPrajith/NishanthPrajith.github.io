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


function App() {
  var count = true;
  const location = useLocation();

  return (
    <div className="App">
      <DotRing />

      <AnimatePresence>
        <NavBar></NavBar>
        <Switch location = {location} key = {location.key}>
          <Route exact path = "/">
            <MainLoader />
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

      <Version versionNumber = {"v1.0"} />
      {count = false}
      {console.log(count)}
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