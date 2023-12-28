import { useState } from "react";
import Popup from "./components/Popup";
// import Lobby from "./Lobby";
import Board from "./components/Board";

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