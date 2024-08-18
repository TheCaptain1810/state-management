import React, { useState } from 'react'

export default function Button(props) {

    const [seperateCount, setSeperateCount] = useState(0);
    const handleSeperateCount = () => {
        setSeperateCount(seperateCount => seperateCount + 1);
    }
    
    const { count, handleClick } = props;

  return (
    <div>
        <h1>Using props</h1>
        <button onClick={handleClick}>Click me!</button>
        <p>{count}</p>
        <h1>Using seperate state</h1>
        <button onClick={handleSeperateCount}>Seperate Counter</button>
        <p>{seperateCount}</p>
    </div>
  )
}
