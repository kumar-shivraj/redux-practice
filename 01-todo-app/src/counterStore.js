import createStore from "./library/createStore";
let initialState = {
  count: 0,
};

const makeCountUp = (state) => {
  console.log("makeCountUp");
  state.count += 1;
  console.log("count", state.count);
};

const store = createStore(initialState, makeCountUp);

export default store;
