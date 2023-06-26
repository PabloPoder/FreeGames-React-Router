import './App.css'

import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import AuthenticationPage, { action as authAction } from './pages/AuthenticationPage';
import { action as logoutAction } from './pages/LogoutPage';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GameList } from './components/GameList';
import { GameDetailsItem } from './components/GameDetailsItem';

import { getGames, getGameById } from './services/getGames';

import { tokenLoader } from './services/authentication.js'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage />,
      loader: tokenLoader,
      id: 'root',
      children: [
        {
          path: "login",
          element: <AuthenticationPage />,
          action: authAction,
        },
        {
          path: 'logout',
          action: logoutAction
        },
        {
          index: true,
          element: <GameList />,
          loader: async () => { 
            return await getGames();
          },
        },
        {
          path: ":gameId",
          element: <GameDetailsItem />,
          loader: async ({ request, params }) => {
            const gameId = params.gameId
            const game = await getGameById({gameId});
            return game
          }
        },
      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
