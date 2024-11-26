import React from "react";
import store from "../counterStore";
// const Counter1 = ({ count, setCount }) => {
const Counter1 = () => {
  const count = store.getState().count;
  // const [countState, setCountState] = useState(0);

  console.log("count from Counter1 Component :", count);
  const incrementCount = () => {
    console.log("incrementCount");
    store.dispatch();
    // setCountState(store.getState().count);
    let newCount = store.getState().count;
    document.getElementById("count1").innerText = `Count : ${newCount}`;
  };
  return (
    <div>
      <h2 id="count1">Count : {count}</h2>
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  );
};

export default Counter1;
