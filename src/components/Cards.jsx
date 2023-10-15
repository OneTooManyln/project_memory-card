import handleImages from "./GetImages";
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

  let gamesArray = getImages();
  gamesArray = shuffle(gamesArray);

  const handleCardClick = (cardId) => {
    if (clickedCards.includes(cardId)) {
      resetGame();
    } else {
      setClickedCards([...clickedCards, cardId]);
      setCurrentScore(currentScore + 1);
      if (currentScore >= highestScore) {
        setHighestScore(currentScore + 1);
      }
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClickedCards([]);
  };

  const endGame = () => {
    resetGame();
    setHighestScore(0);
  };

  return (
    <>
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
    </>
  );
}
