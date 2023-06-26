import classes from "./ErrorPage.module.css";

import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className={classes.error}>
      <div>
        <h1>This is NOT fine</h1>
        <h2>{ error.message }</h2>
        <img
          src="https://media4.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif"
          alt="Gif del perro this is not fine"
        />
      </div>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
