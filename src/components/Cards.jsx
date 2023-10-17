import handleImages from "./HandleImages";
import GameOverScreen from "./GameOverScreen";
import { useState } from "react";
import "../styles/Cards.css";

export default function Cards({
  currentScore,
  setCurrentScore,
  highestScore,
  setHighestScore,
  clickedCards,
  setClickedCards,
}) {
  const { getImages, shuffle } = handleImages();
  const [gameOver, setGameOver] = useState(false);

  let gamesArray = getImages();
  gamesArray = shuffle(gamesArray);

  const handleCardClick = (cardId) => {
    if (gameOver) {
      return;
    }

    if (clickedCards.includes(cardId)) {
      resetGame();
    } else {
      setClickedCards([...clickedCards, cardId]);
      setCurrentScore(currentScore + 1);
      if (currentScore >= highestScore) {
        setHighestScore(currentScore + 1);
      }
    }

    if (currentScore + 1 === gamesArray.length) {
      endGame();
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedCards([]);
    setGameOver(false);
  };

  const endGame = () => {
    resetGame();
    setHighestScore(0);
    setGameOver(true);
  };

  return (
    <>
      {gameOver ? (
        <GameOverScreen onRestart={resetGame} />
      ) : (
        <div className="cards-container">
          {gamesArray.map((game) => (
            <button
              className="card"
              key={game.id}
              onClick={() => handleCardClick(game.id)}
            >
              <img src={game.background_image} alt={game.name} />
              <p>{game.name}</p>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
