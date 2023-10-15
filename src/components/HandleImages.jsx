import { useState, useEffect } from "react";

export default function handleImages() {
  const getImages = () => {
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
          setGamesArray(data.results.slice(0, 18));
          console.log(gamesArray);
        })
        .catch((error) => {
          console.error("Something went wrong..", error);
        });
    }, []);

    return gamesArray;
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return { getImages, shuffle };
}
