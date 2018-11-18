export default function(state = [], action) {
  switch (action.type) {
    case "NUMBER_CLICKED":
      // console.log("numbersReducer: ", action, state);
      return action;
    default:
      return state;
  }
}
