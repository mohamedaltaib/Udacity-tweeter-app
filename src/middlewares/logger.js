const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.table("Action:", action);
  const returnValue = next(action);
  console.log("State: ", store.getState());
  console.groupEnd;
  return returnValue;
};

export default logger;
