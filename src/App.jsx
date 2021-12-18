import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react';
import reactDom from 'react-dom';



function App() {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      },10)
    } else {
      clearInterval(interval);
    }
    return() => clearInterval(interval)
  }, [start])
  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (time / 10) % 1000).slice(-2)}</span>
      </h2>
      <div>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button onClick={() => { setTime(0); setStart(false); }}>Reset</button>
        <button onClick={(e) => {
          const dablClick = e.currentTarget;
          if(dablClick = 2) { setStart(false); setInterval(300) }
        }}>Wait</button>
      </div>
    </div>
    
  );
}

export default App;
