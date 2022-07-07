import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const restart = () => {
    setCount(0);
  };

  return (
    <div>
      <div>
        <h1>Count:</h1>
        <h1 data-testid="count">{count}</h1>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>restart</button>
      </div>
    </div>
  );
};

export default Counter;
