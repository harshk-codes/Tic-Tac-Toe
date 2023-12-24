import { useState } from "react";
import Popup from "./Popup";
import Lobby from "./Lobby";

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
        <Lobby />
      )}
    </div>
  )
}

export default App;