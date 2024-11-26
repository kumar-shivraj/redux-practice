const createStore = (initialState, handler) => {
  let state = initialState;
  const getState = () => {
    return state;
  };

  const dispatch = () => {
    console.log("dispatch");
    handler(state);
  };

  return {
    getState,
    dispatch,
  };
};

export default createStore;
