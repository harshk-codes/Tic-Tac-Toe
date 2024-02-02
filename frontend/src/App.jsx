import { useState } from "react";
// import { createBrowserRouter } from "react-router-dom";
import Popup from "./components/Popup";
// import Lobby from "./components/Lobby";
import Board from "./components/Board";
// import Waiting from "./components/Waiting"

const App = () => {
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
  );
};

export default App;