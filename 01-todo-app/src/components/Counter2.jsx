import React from "react";
import store from "../counterStore";
// const Counter2 = ({ count, setCount }) => {
const Counter2 = () => {
  const count = store.getState().count;
  return (
    <div>
      <h2>Count : {count}</h2>
      <div>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  );
};

export default Counter2;
