import classes from './GameItem.module.css'

import { Link, useRouteLoaderData } from 'react-router-dom';

export function GameItem({ game }) {
  const token = useRouteLoaderData('root')

  return (
    <article>
      <Link to={token ? `${game.id }` : '/login'}>
        <div className={classes.container}>
          <img src={game.thumbnail} alt={game.title} />
        </div>
      </Link>
    </article>
  );
}

