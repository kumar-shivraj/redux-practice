import React from "react";
import store from "../counterStore";
// const Counter1 = ({ count, setCount }) => {
const Counter1 = () => {
  const count = store.getState().count;
  const incrementCount = () => {
    console.log("incrementCount");
    store.dispatch();
  };
  return (
    <div>
      <h2>Count : {count}</h2>
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  );
};

export default Counter1;
