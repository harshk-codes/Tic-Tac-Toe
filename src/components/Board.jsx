import '../assets/styles/board.css'

function Board() {


    return (
        <>
            <div className='gameBoard'>
                <div className='row'>
                    <div className='box b1'>1</div>
                    <div className='box b2'>2</div>
                    <div className='box b3'>3</div>
                </div>

                <div className='row'>
                    <div className='box b4'>4</div>
                    <div className='box b5'>5</div>
                    <div className='box b6'>6</div>
                </div>

                <div className='row'>
                    <div className='box b7'>7</div>
                    <div className='box b8'>8</div>
                    <div className='box b9'>9</div>
                </div>
            </div>
        </>
    );
}

export default Board;