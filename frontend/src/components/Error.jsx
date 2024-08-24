import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError;
    return (
        <div>
            <h1>Error {err.status}: An error occurred</h1>
        </div>
    );
};

export default Error;


//code for host card component
// const HostCard = ({ setJoinCode, setWaiting, username }) => {
//   const [code, setCode] = useState("");

//   newSocket.on("game_code", (gameCode) => {
//     setCode(gameCode);
//     setJoinCode(gameCode);
//     setWaiting(true);
//   });

//   const refCode = () => {
//     newSocket.emit("host_game", { username });
//   };

//   return (
//     <>
//       <div className="host-container">
//         <h3>host a game</h3>
//         {code && <h2>{code}</h2>}
//         <button onClick={refCode}>
//           <span className="material-symbols-outlined sync">sync</span>
//         </button>
//       </div>
//     </>
//   );
// };

