import { useState, useEffect } from 'react';
import "./App.css";


function App() {
  const [showPop, setShowPop] = useState(false);

  useEffect(() => {
    //display popup on componenet mounting
    setShowPop(true);
  }, []);

  const handleClosePopup = () => {
    //close the popup when start button is clicked
    setShowPop(false);
  }

  return (
    <div className='app'>
      {showPop && (
        <div className='pop-containter'>
          <div className='popup'>
            <h1>WELCOME TO TIC TAC TOE</h1>
            <button className='start' onClick={handleClosePopup}>Start</button>
          </div>
        </div>
      )}


    </div>
  );
}

export default App;
