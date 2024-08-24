// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {io} from "socket.io-client";
import App from "./App.jsx";
import "./assets/styles/main.css";
import Lobby from "./components/Lobby.jsx";
import Error from "./components/Error.jsx";
import Board from "./components/Board.jsx";
import Waiting from "./components/Waiting.jsx";

export const newSocket = io("http://localhost:3500", {
  autoConnect: true,
});

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/lobby",
    element: <Lobby />,
    errorElement: <Error />,
  },
  {
    path: "/game",
    element: <Board />,
    errorElement: <Error />,
  },
  {
    path: "/waiting",
    element: <Waiting />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={appRouter} />
);
