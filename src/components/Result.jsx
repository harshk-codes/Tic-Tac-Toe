//result component
const Result = (props) => (
    <>
    <div className='result-container'>
        <h1>{props.winner}</h1>
    </div>
    <button className='play-again'>play again</button>
    </>
);

export default Result;