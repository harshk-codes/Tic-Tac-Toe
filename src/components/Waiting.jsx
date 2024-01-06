import '../assets/styles/waiting.css'

const Waiting = () => (
    <>
        <div className='wait-container'>
            <div className='title-container'>
                <h1>hang on, waiting for other player</h1>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div  className='joke-container'>
                <h1>Here a dad joke👇</h1>
                <h3>The quick brown fox jumps over the lazy dog.</h3>
            </div>
        </div>
    </>
);

export default Waiting;