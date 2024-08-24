/* eslint-disable react/no-unescaped-entities */
import "../assets/styles/waiting.css";
import useJoke from '../utils/useJoke';

const Waiting = () => {
    const data = useJoke();

    return (
  <>
    <div className="wait-container">
      <div className="title-container">
        <h1>hang on, waiting for opponent</h1>
        <div>
          <span className="loading__dot"></span>
          <span className="loading__dot"></span>
          <span className="loading__dot"></span>
          </div>
      </div>

      <div className="joke-container">
        <h1>Here's a dad joke👇</h1>
          <h3>{data && <h3>{data[0].joke}</h3>}</h3>
      </div>
    </div>
  </>
);
};

export default Waiting;