import "./GameList.css";

import { GameItem } from "./GameItem";

import { useLoaderData } from "react-router-dom";

export function GameList() {
  const games = useLoaderData()

  return (
    <section className="game-section">
      <ul className="games">
        {games.slice(0, 20).map((game) => (
          <li key={game.id}>
            <GameItem game={game} />
          </li>
        ))}
      </ul>
    </section>
  );
}
