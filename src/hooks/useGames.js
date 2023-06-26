import { useState, useEffect } from "react";
import { getGames } from "../services/getGames";

export const useGames = () => {
  const [games, setGames] = useState([])

  const getListOfGames = async () => {
    const newGames = await getGames()
    setGames(newGames)
    return newGames
  };

  const getGameById = ({ gameId }) => {
    console.log(games.length)
    if (games.length === 0) return {}

    return games.find((game) => game.id.toString() === gameId);
  };

  useEffect(() => {
    if (games.length === 0) {
      getListOfGames()
    }
    
  }, []);

  return { games, getListOfGames, getGameById };
};
