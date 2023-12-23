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
        <div className='container'>
            <h1>welcome to Tic-Tac-Toe</h1>
            <button className='start' onClick={handleClosePopup}>start</button>
        </div>
      )}
    </div>
  );
}

export default App;
