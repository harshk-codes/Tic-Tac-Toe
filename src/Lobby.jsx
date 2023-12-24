import "./Lobby.css";

function Lobby() {
  return (
    <>
      <div className="lobbyContainer">
        <div className="enterContainer">
            <h1>enter a game</h1>
            <form>
                <input className="joinInput" />
                <button className="join">join</button>
            </form>
        </div>
        <div><h1>OR</h1></div>
        <div className="joinContainer">
            <h1>host a game</h1>
            <h2 className="randomCode"></h2>
            <span>R</span>
        </div>
      </div>
    </>
  );
}

export default Lobby;
