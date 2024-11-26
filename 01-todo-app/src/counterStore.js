import createStore from "./library/createStore";
let initialState = {
  count: 10,
};

const store = createStore(initialState);

export default store;
