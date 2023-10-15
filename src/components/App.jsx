import { useState } from "react";
import "../styles/App.css";
import Cards from "./Cards";
import Scoreboard from "./Scoreboard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  return (
    <>
      <div className="app">
        <Scoreboard currentScore={currentScore} highestScore={highestScore} />
        <Cards
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          highestScore={highestScore}
          setHighestScore={setHighestScore}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
        />
      </div>
    </>
  );
}

export default App;
