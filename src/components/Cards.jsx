import GetImages from "./GetImages";
import "../styles/Cards.css";

export default function Cards() {
  const gamesArray = GetImages().slice(0, 18);

  return (
    <div className="cards-container">
      {gamesArray.map((game) => (
        <button className="card" key={game.id}>
          <img src={game.background_image} alt={game.name} />
          <p>{game.name}</p>
        </button>
      ))}
    </div>
  );
}
