import { useState } from "react";
import Popup from "./Popup";
// import Lobby from "./Lobby";
import Board from "./Board";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleStartClick = () => {
    setShowPopup(false);
  }

  return (
    <div>
      {showPopup ? (
        <Popup onStartClick={handleStartClick} />
      ) : (
        <Board />
      )}
    </div>
  )
}

export default App;