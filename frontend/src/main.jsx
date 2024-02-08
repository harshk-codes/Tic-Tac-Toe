import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx';
import './assets/styles/main.css'
import Lobby from './components/Lobby.jsx';
import Error from './components/Error.jsx';
import Board from './components/Board.jsx';
import Waiting from './components/Waiting.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/lobby",
    element: <Lobby />,
  },
  {
    path: "/game",
    element: <Board />,
  },
  {
    path: "/waiting",
    element: <Waiting />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={appRouter} />
  </React.StrictMode>
);
