import { useState } from "react";
import Popup from "./components/Popup";
// import Lobby from "./components/Lobby";
// import Board from "./components/Board";
import Waiting from "./components/Waiting"

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
        <Waiting />
      )}
    </div>
  )
}

export default App;