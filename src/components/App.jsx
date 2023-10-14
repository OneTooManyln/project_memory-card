import { useState } from "react";
import "../styles/App.css";
import Cards from "./Cards";
import Scoreboard from "./Scoreboard";

function App() {
  return (
    <>
      <div className="app">
        <Scoreboard />
        <Cards />
      </div>
    </>
  );
}

export default App;
