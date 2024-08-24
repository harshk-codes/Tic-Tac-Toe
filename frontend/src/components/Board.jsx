/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../assets/styles/board.css";
import Result from "./Result";
import { newSocket } from "../main";

var initialBoard = Array(9).fill(null);

function Board() {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXnext] = useState(true);
  const [finishedState, setFinishedState] = useState(false);
  const [winningLine, setWinningLine] = useState(null);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board).winner) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "O" : "X";

    setBoard(newBoard);
    setIsXnext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [x, y, z] = winLines[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return { winner: squares[x], line: winLines[i] };
      }
    }

      //draw condition
    if (squares.every(square => square != null)) {
      return {winner: "draw", line: null};
    }

    return {winner: null, line: null};
  };

  const RenderSquare = (props) => {
    const {className, isWinningSquare, onSqClick, value} = props;
    const sqClassName = isWinningSquare ? "square winning-line" : "square";
    return (
      <div className={"box " + className}>
        <button className={sqClassName} onClick={onSqClick}>
          {value}
        </button>
      </div>
    );
  };

  const User = (props) => {
    return (
      <>
        <div className="user">
          <h1 className="userName">{props.userName}</h1>
          <span className="status"></span>
        </div>
      </>
    );
  };

  useEffect(() => {
    const winner = calculateWinner(board);

    if (winner.winner) {
      setFinishedState(true);
      setWinningLine(winner.line);
    }

  }, [board]);

  return (
    <>
      <div className="board">
        <div className="user-container">
          <User userName="Player1" />
          <User userName="Player2" />
        </div>
        <div className="gameboard-container">
          <div className="gameBoard">
            {initialBoard.map((e, index) => (
              <RenderSquare
                key={index}
                value={board[index]}
                onSqClick={() => handleClick(index)}
                className={"b" + (index + 1)}
                isWinningSquare={winningLine && winningLine.includes(index)}
              />
            ))}
          </div>
        </div>
        {finishedState ? (
          calculateWinner(board).winner != "draw" ? (
            <Result winner={calculateWinner(board).winner + " won!"} />
          ) : (
            <Result winner="It's a draw!" />
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Board;
