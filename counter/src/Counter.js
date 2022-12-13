import React from "react";
import { useState } from "react";

const Counter = () => {
  const containerStyle = {
    display: "flex",
  };

  const buttonStyle = {
    fontSize: "1.5rem",
    width: "40px",
    height: "40px",
  };

  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>{count}</h1>
        <div style={containerStyle}>
          <button
            type='button'
            onClick={() => setCount(count - 1)}
            style={buttonStyle}
          >
            -
          </button>
          <button
            type='button'
            onClick={() => setCount(count + 1)}
            style={buttonStyle}
          >
            +
          </button>
        </div>
      </header>
    </div>
  );
};

export default Counter;
