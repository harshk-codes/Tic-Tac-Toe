/* eslint-disable react/prop-types */
import { useState } from "react";
import "../assets/styles/lobby.css";

// const EnterCard = () => {

//   const [joinCode, setJoinCode] = useState('');

//   return (
//     <>
//       <div className="enter-container">
//         <h3>enter a game</h3>
//         <input type="text" inputMode="numeric" pattern="\d*" value={joinCode} onChange={(e) => {
//           setJoinCode(e.target.value);
//         }} />
//         <button onClick={() => {
//           console.log(joinCode);
//         }}>join</button>
//       </div>
//     </>
//   );
// };  

// const HostCard = () => {
//   //generating and changing game code
//   let inCode = Math.floor(Math.random() * 10000);
//   let [code, setCode] = useState(inCode);
//   const refCode = () => {
//     setCode(Math.floor(Math.random() * 10000));
//   };

//   return (
//     <>
//       <div className="host-container">
//         <h3>host a game</h3>
//         <h2>{code}</h2>
//         <button
//           onClick={() => {
//             refCode();
            
//           }}
//         >
//           <span className="material-symbols-outlined sync">sync</span>
//         </button>
//       </div>
//     </>
//   );
// };


// const Lobby = () => {

//   const [username, setUsername] = useState("");

//   return (
//     <>
//     <div className="lobby">
//       <div className="username">
//         <input type="text" value={username} onChange={(e) => {
//           setUsername(e.target.value);
//         }} />
//         <button onClick={() => {
//           console.log(username);
//           document.querySelector(".editSquare").style.color = "#4bb543";
//         }}>
//           <span className="material-symbols-outlined editSquare">
//             check_circle
//           </span>
//         </button>
//       </div>
//       <div className="code-container">
//         <EnterCard />
//         <span className="partition"></span>
//         <HostCard />
//       </div>
//       </div>
//     </>
//   );
// };


const Lobby = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
    <div className="lobby-container">
      <div className="heading-container">
        <img alt="Tic Tac Toe" src="https://img.icons8.com/?size=256&id=y9fWbHrSJDGu&format=png" />
        <h1>Tic Tac Toe</h1>
      </div>

      <div className="search-container">
        <label>enter username</label>
        <input type="text" value={searchText} onChange={(e) => {
          setSearchText(e.target.value);
        }}/>
        <button onClick={() => {
          console.log(searchText);
        }}>
          search for players
        </button>
      </div>
      </div>
    </>
  )
}
export default Lobby;
