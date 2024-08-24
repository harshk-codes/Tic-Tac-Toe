/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { newSocket } from "../main";
import Swal from "sweetalert2";
import "../assets/styles/lobby.css";
// import Waiting from "./Waiting";

const EnterCard = ({ setJoinCode, joinCode, username }) => {
  // const [joinCode, setJoinCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <div className="enter-container">
        <h3>enter a game</h3>
        <input
          type="text"
          inputMode="numeric"
          pattern="\d*"
          value={joinCode}
          placeholder={isFocused ? "" : "code"}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChange={(e) => {
            setJoinCode(e.target.value);
          }}
        />
        {/* <Link to="/waiting"> */}
          <button
            className="join"
            onClick={() => {
              newSocket.emit("request_to_join", { joinCode, username });
              // setWaiting(true);
            }}
          >
            join
          </button>
        {/* </Link> */}
      </div>
    </>
  );
};



const Lobby = () => {
  const [username, setUsername] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  // const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let gameStarted = false;
  
    newSocket.on("start_game", ({ players }) => {
      console.log("Received start_game event. Players:", players);
      navigate("/game", { state: { players } });
      newSocket.emit("game_started");
    });
  
    newSocket.on("waiting_for_player", () => {
      console.log("Received waiting_for_player event");
      if (!gameStarted) {
        navigate("/waiting");
      }
    });
  
    newSocket.on("invalid_code", () => {
      console.log("Received invalid_code event");
      alert("The code you entered is invalid.");
    });
  
    return () => {
      newSocket.off("start_game");
      newSocket.off("waiting_for_player");
      newSocket.off("invalid_code");
    };
  }, [navigate]);
  
  
  
  //extract username
  return (
    <>
      <div className="lobby">
        <div className="username">
          {/* <label>Enter username</label> */}
          <input
            type="text"
            value={username}
            placeholder={isFocused ? "" : "Enter username"}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button
            onClick={() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "username saved",
                showConfirmButton: false,
                timer: 1200,
                width: 300,
                heightAuto: true,
                backdrop: false,
                background: '#393f47',
                iconColor: '#ADFF2F',
                color: '#fdd842',
              });
              // console.log(username);
            }}
          >
            Enter
          </button>
        </div>
        <div className="code-container">
          <EnterCard
            setJoinCode={setJoinCode}
            joinCode={joinCode}
            // setWaiting={setWaiting}
            username={username}
          />
          <span className="partition"></span>

          <p>Your code should be same <br></br> as your playing partner</p>
        </div>
        {/* {waiting && <Waiting />} */}
      </div>
    </>
  );
};

export default Lobby;
