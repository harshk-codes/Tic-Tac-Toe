import { Link } from "react-router-dom";
import "../assets/styles/popup.css";

// eslint-disable-next-line react/prop-types
function Popup({ onStartClick }) {
  return (
    <>
      <div className="container">
        <h1>welcome to Tic-Tac-Toe</h1>
        <Link to="/lobby">
          <button className="start" onClick={onStartClick}>
            start
          </button>
        </Link>
      </div>
    </>
  );
}

export default Popup;
