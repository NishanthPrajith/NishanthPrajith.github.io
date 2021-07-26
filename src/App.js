import './App.css';

import NavBar from './RecycleComps/navbar';

import { useContext } from "react";
import DotRing from "./RecycleComps/DotRing/DotRing";
import { MouseContext } from "./context/mouse-context";

function App() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <DotRing />
      <NavBar></NavBar>
      <h1>Test react upload app</h1>
      <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <h1>Hover over me</h1>
        </div>
    </div>
  );
}

export default App;
