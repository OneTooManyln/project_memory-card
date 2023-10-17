import "../styles/GameOverScreen.css";

export default function GameOverScreen({ onRestart }) {
  return (
    <div className="game-over-screen">
      <h1>Game Over</h1>
      <button className="restart-game" onClick={onRestart}>
        <h3>Play Again</h3>
      </button>
    </div>
  );
}
