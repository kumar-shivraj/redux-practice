const createStore = (initialState, handler) => {
  let state = initialState;

  const subscribers = []; // array of functions
  const getState = () => {
    return state;
  };

  const dispatch = () => {
    console.log("dispatch");
    handler(state);
    subscribers.forEach((callback) => callback());
  };

  const subscribe = (callback) => {
    subscribers.push(callback);
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default createStore;
