import React, { useState } from 'react'

const Count = () => {
    // Define a state variable 'count' and a function 'setCount' to update it
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    };

    const handleDecrement = () => {
        setCount(count-1);
    };

    const handleReset =  () => {
        setCount(0);
    }
  return (
    <div className='counter-container'>
        <h4>Counter Exampple</h4>
        <h4 className='count-display'>Count : {count} </h4>
        <div className='button-container'>
            <button onClick={handleIncrement} className='increase-button'>Increment</button>
            <button onClick={handleDecrement} className='decrease-button'>Decrement</button>
            <button onClick={handleReset} className='reset-button'>Reset</button>
        </div>
    </div>
  )
}

export default Count