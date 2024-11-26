import React, { useEffect } from "react";
import store from "../counterStore";
// const Counter2 = ({ count, setCount }) => {
const Counter2 = () => {
  const count = store.getState().count;

  useEffect(() => {
    store.subscribe(() => {
      const count = store.getState().count;
      document.getElementById("count2").innerText = `Count : ${count}`;
    });
  }, []);
  return (
    <div>
      <h2 id="count2">Count : {count}</h2>
      <div>
        <button onClick={() => store.dispatch()}>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  );
};

export default Counter2;
