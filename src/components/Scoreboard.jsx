import "../styles/Scoreboard.css";

export default function Scoreboard() {
  return (
    <>
      <div className="scoreboard">
        <div className="current-score">
          <h2>SCORE: </h2>
          <h2>0</h2>
        </div>
        <div className="highest-score">
          <h2>HIGHEST SCORE: </h2>
          <h2>0</h2>
        </div>
      </div>
    </>
  );
}
