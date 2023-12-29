import { useState } from 'react';
import '../assets/styles/board.css'

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


    const renderSquare = (index) => {
        <button className='sq' onClick={() => {handleClick(index)}}>
            {board[index]}
        </button>
    };

    //rendering winner component
  


    return (
        <>
            <div className='gameBoard'>
                <div className='row'>
                    <div className='box b1'>{renderSquare(0)}</div>
                    <div className='box b2'>{renderSquare(1)}</div>
                    <div className='box b3'>{renderSquare(2)}</div>
                </div>

                <div className='row'>
                    <div className='box b4'>{renderSquare(3)}</div>
                    <div className='box b5'>{renderSquare(4)}</div>
                    <div className='box b6'>{renderSquare(5)}</div>
                </div>

                <div className='row'>
                    <div className='box b7'>{renderSquare(6)}</div>
                    <div className='box b8'>{renderSquare(7)}</div>
                    <div className='box b9'>{renderSquare(8)}</div>
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