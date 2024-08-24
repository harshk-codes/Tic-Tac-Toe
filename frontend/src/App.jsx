import { useState } from "react";
// import {io} from "socket.io-client";
import Popup from "./components/Popup";
import Lobby from "./components/Lobby";

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleStartClick = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup ? <Popup onStartClick={handleStartClick} /> : <Lobby />}
    </div>
  );
};

export default App;
