function evaluateArray(array) {
  console.log("array before", array);
  let a = array.join("");
  let groupVals = a.split(/[\D]+/g);
  // let groupVals = a.split(' ');
  let groupOps = a.split(/[\d]+/g);
  console.log("groupedVals", groupVals, "groupOps", groupOps, "a", a);
  console.log("array after", array);
  return "calculate";
}

export default function(state = [], action) {
  switch (action.type) {
    case "NUMBER_CLICKED":
      let numberArray = state.slice();
      numberArray.push(action.payload);
      let zeroFirst = numberArray[0];
      if (zeroFirst === "0") {
        numberArray.shift();
      }
      return numberArray;
    case "OPERATOR_CLICKED":
      let operatorArray = state.slice();
      operatorArray.push(action.payload);
      // console.log('OPERATOR_CLICKED',operatorArray);
      return operatorArray;
    case "EQUALS_CLICKED":
      let equalsArray = state.slice();
      evaluateArray(equalsArray);
      // console.log(blah)
      // let val = equalsArray.join('');
      return [2];
    case "CLEAR_CLICKED":
      let clearArray = state.slice();
      // console.log('CLEAR_CLICKED', clearArray);
      clearArray = [];
      return clearArray;
    default:
      return state;
  }
}
