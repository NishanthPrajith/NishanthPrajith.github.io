import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MouseContextProvider from "./context/mouse-context";
import {
  HashRouter as Router,} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <Router>
        <App />
      </Router>
    </MouseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

