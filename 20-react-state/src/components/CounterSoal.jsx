import React from "react";
import { useState } from "react";

const CounterSoal = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>CounterSoal</h1>
      <button onClick={increment}>+</button>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterSoal;
