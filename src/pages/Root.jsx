import { Outlet, Form, useRouteLoaderData, Link, useParams } from "react-router-dom";

import classes from "./Root.module.css"

export default function Root() { 
  
  const token = useRouteLoaderData('root')

	return (
    <>
      <header className={classes.header}>
        <nav className={ classes.nav}>
          <h1>Free Games: React Ruter 🎮</h1>
          {token && <li>
            <Form action='/logout' method="post">
              <button>Log out 🚪</button>
            </Form>
          </li>}
          {!token && <li>
            <Link to={'login'}>Log In 🖖🏻</Link>
          </li>}
        </nav>
      </header>
      <Outlet />
    </>
  );
}