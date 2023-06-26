import classes from "./GameDetailsItem.module.css";

import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export function GameDetailsItem() {
  const game = useLoaderData()
    
  const platform = game.platform === "PC (Windows)" ? "💻" : "🎮";

  return (
    <article>
      <div className={classes.container}>
        <h2>{game.title}</h2>
        <div className={classes.gameDetails}>
          <img src={game.thumbnail} alt={game.title} />
          <div className={classes.gameInfo}>
            <section>
              <h3>{game.platform} {platform}</h3>
              <h4><span>Genre: </span>{game.genre}</h4>
            </section>
            <section>
              <h4><span>Developer: </span>{game.developer}</h4>
              <h4><span>Publisher: </span>{game.publisher}</h4>
            </section>
            <section>
              <h4><span>Release Date: </span>{game.release_date}</h4>
            </section>
          </div>
        </div>
        <p>{game.short_description}</p>
      </div>

      <Link to="/" className={classes.link}>
        👈🏻Go to Games
      </Link>
    </article>
  );
}
