/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../assets/styles/board.css'
import Line from './Line';
import Result from './Result';
// import { lineCss } from '../utils/lineCss';

//filling initial board with null values
var initialBoard = Array(9).fill(null);

function Board() {

    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXnext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board).winner) {
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
    if (calculateWinner(board).line == 0)
    {
        <Line />
    }
    if (calculateWinner(board).line == 1)
    {
        <Line />
    }
    if (calculateWinner(board).line == 2)
    {
        <Line />
    }
    if (calculateWinner(board).line == 3)
    {
        <Line />
    }
    if (calculateWinner(board).line == 4)
    {
        <Line />
    }
    if (calculateWinner(board).line == 5)
    {
        <Line />
    }
    else
    {
        <Result winner="lose" />
    }


    return (
        <>
        <div className='board'>
            <div className='user-container'>
                <h1 className='user1'>You<span></span></h1>
                <h1 className='user2'>User<span></span></h1>
            </div>

            <div className='gameboard-container'>
            <div className='gameBoard'>
                    <div className='box b1'><RenderSquare value={board[0]} onSqClick={() => handleClick(0)} /></div>
                    <div className='box b2'><RenderSquare value={board[1]} onSqClick={() => handleClick(1)} /></div>
                    <div className='box b3'><RenderSquare value={board[2]} onSqClick={() => handleClick(2)} /></div>

                    <div className='box b4'><RenderSquare value={board[3]} onSqClick={() => handleClick(3)} /></div>
                    <div className='box b5'><RenderSquare value={board[4]} onSqClick={() => handleClick(4)} /></div>
                    <div className='box b6'><RenderSquare value={board[5]} onSqClick={() => handleClick(5)} /></div>
                    
                    <div className='box b7'><RenderSquare value={board[6]} onSqClick={() => handleClick(6)} /></div>
                    <div className='box b8'><RenderSquare value={board[7]} onSqClick={() => handleClick(7)} /></div>
                    <div className='box b9'><RenderSquare value={board[8]} onSqClick={() => handleClick(8)} /></div>
            </div>
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
        const [x, y, z] = winLines[i];

        if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
            return {winner: squares[x], line: winLines[i]};
        }
    }

    return {winner: null, line: null};
};

export default Board;

//left jobs:
//-- winner component rendering 
//-- lines css rendering 1s before the result/winner component gets rendered
//-- writing RTC code and setup user connection
//-- finalizing the sequential component rendering 
//-- responsiveness and refactoring the code