import { useState, useEffect } from "react";

const GetImages = () => {
  const [gamesArray, setGamesArray] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/games?key=e18482c2cd1c4b1685f79cebe248c334",
      { mode: "cors" },
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGamesArray(data.results);
        console.log(gamesArray);
      })
      .catch((error) => {
        console.error("Something went wrong..", error);
      });
  }, []);

  return gamesArray;
};

export default GetImages;
