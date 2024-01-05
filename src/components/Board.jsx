import { useState } from 'react';
import '../assets/styles/board.css'

//evaluation component
const Evaluate = () => (
    <>
        <span className='line'></span>
    </>
);

//result component
const Result = (props) => (
    <>
    <div className='result-container'>
        <h1>{props.winner}</h1>
    </div>
    <button className='play-again'>play again</button>
    </>
);

//filling initial board with null values
var initialBoard = Array(9).fill(null);

function Board() {

    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXnext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) {
            return;
        }

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';

        setBoard(newBoard);
        setIsXnext(!isXNext);
    };

    const RenderSquare = (props) => {
        return (
            <button className='square' onClick={props.onSqClick}>
                {props.value}
            </button>
        );
    }

    //rendering winner component
  


    return (
        <>
            <div className='gameBoard'>
                <div className='row'>
                    <div className='box b1'><RenderSquare value={board[0]} onSqClick={() => handleClick(0)} /></div>
                    <div className='box b2'><RenderSquare value={board[1]} onSqClick={() => handleClick(1)} /></div>
                    <div className='box b3'><RenderSquare value={board[2]} onSqClick={() => handleClick(2)} /></div>
                </div>

                <div className='row'>
                    <div className='box b4'><RenderSquare value={board[3]} onSqClick={() => handleClick(3)} /></div>
                    <div className='box b5'><RenderSquare value={board[4]} onSqClick={() => handleClick(4)} /></div>
                    <div className='box b6'><RenderSquare value={board[5]} onSqClick={() => handleClick(5)} /></div>
                </div>

                <div className='row'>
                    <div className='box b7'><RenderSquare value={board[6]} onSqClick={() => handleClick(6)} /></div>
                    <div className='box b8'><RenderSquare value={board[7]} onSqClick={() => handleClick(7)} /></div>
                    <div className='box b9'><RenderSquare value={board[8]} onSqClick={() => handleClick(8)} /></div>
                </div>
            </div>
        </>
    );
}

//calculating winner
const calculateWinner = (squares) => {
    const winLines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let i = 0; i <winLines.length; i++) {
        const [ x, y, z] = winLines[i];

        if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
            return squares[x];
        }
    }

    return null;
};

export default Board;