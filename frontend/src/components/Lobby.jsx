/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/styles/lobby.css";

const EnterCard = () => {
  return (
    <>
      <div className="enter-container">
        <h3>enter a game</h3>
        <input />
        <button>join</button>
      </div>
    </>
  );
};

const HostCard = () => {
  //generating and changing game code
  let inCode = Math.floor(Math.random() * 10000);
  let [code, setCode] = useState(inCode);
  const refCode = () => {
    setCode(Math.floor(Math.random() * 10000));
  };
  return (
    <>
      <div className="host-container">
        <h3>host a game</h3>
        <h2>{code}</h2>
        <button
          onClick={() => {
            refCode();
            
          }}
        >
          <span className="material-symbols-outlined sync">sync</span>
        </button>
      </div>
    </>
  );
};
const Lobby = () => {
  return (
    <>
    <div className="lobby">
      <div className="username">
        <input />
        <button>
          <span className="material-symbols-outlined editSquare">
            edit_square
          </span>
        </button>
      </div>
      <div className="code-container">
        <EnterCard />
        <span className="partition"></span>
        <HostCard />
      </div>
      </div>
    </>
  );
};

export default Lobby;
