import '../assets/styles/lobby.css'

function Lobby() {
  return (
    <>
      <div className="lobbyContainer">
        <div className="enterContainer">
          <h1>enter a game</h1>
          <form className="enterForm">
            <input className="joinInput" />
            <button className="join">join</button>
          </form>
        </div>
        <div>
          <h1>OR</h1>
        </div>
        <div className="joinContainer">
          <h1>host a game</h1>
          <h2 className="randomCode">1661</h2>
          <span className="material-symbols-outlined refresh">autorenew</span>
        </div>
      </div>
      <div className="userContainer">
        <form className="username">
          <input className="userInput" value={"userOne"} />
          <button className="userEdit">
            <span className="material-symbols-outlined editSquare">edit_square</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default Lobby;
