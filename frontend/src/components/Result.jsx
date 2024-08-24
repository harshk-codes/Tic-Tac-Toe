/* eslint-disable react/prop-types */
import "../assets/styles/result.css";
import { Link } from "react-router-dom";

//result component
const Result = (props) => (
  <>
    <div className="result-container">
      <h1>{props.winner}</h1>
      <Link to={"/lobby"}>
        <button className="play-again">play again</button>
      </Link>
    </div>
  </>
);

export default Result;
