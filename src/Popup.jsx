import './Popup.css'

// eslint-disable-next-line react/prop-types
function Popup({onStartClick}) {

  return (
    <>
          <div className="container">
          <h1>welcome to Tic-Tac-Toe</h1>
          <button className="start" onClick={onStartClick}>start</button>
          </div>
    </>
    
  );
}

export default Popup;