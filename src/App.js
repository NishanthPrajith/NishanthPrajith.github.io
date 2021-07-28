import './App.css';
import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import MainLoader from './loading/main/mainloader';

import NavBar from './RecycleComps/navbar';
import Home from './HomeComps/home';
import About from './AboutComps/about';

import DotRing from "./RecycleComps/DotRing/DotRing";

import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div className="App">

      <DotRing />

      <AnimatePresence exitBeforeEnter>
        <NavBar></NavBar>
        <Switch location = {location} key = {location.key}>
          <Route exact path = "/" component = {Home}></Route>
          <Route path = "/about" component = {About}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
