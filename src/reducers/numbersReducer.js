function evaluateArray(array) {
  console.log("array before", array);
  let a = array.join("");
  let groupVals = a.match(/[\d]+|[\D]+/g);
  let negativeFinal = array.slice(0, 1).pop();
  if (parseInt(negativeFinal) < 0) {
    return negativeFinal;
  }
  if (groupVals.includes('*')) {
    let product, prev, next;
  	groupVals.filter((v, i, arr) => {
  		if (v === '*') {
        prev = arr[i - 1];
        next = arr[i + 1];
        product = parseInt(prev) * parseInt(next);
      };
      return product;
    });
    //example: 1+2*3*4
    let rep = a.replace(`${prev}*${next}`, product.toString());
    // console.log('a', a, 'product', product, 'rep', rep);
    return evaluateArray([rep]);
  } else if (groupVals.includes('/')) {
    let quotient, prev, next;
    groupVals.filter((v, i, arr) => {
      if (v === '/') {
        prev = arr[i - 1];
        next = arr[i + 1];
        quotient = parseInt(prev) / parseInt(next);
      };
      return quotient;
    });
    let rep = a.replace(`${prev}/${next}`, quotient.toString());
    return evaluateArray([rep]);
  } else if (groupVals.includes('+')) {
    let sum, prev, next;
    groupVals.filter((v, i, arr) => {
      if (v === '+') {
        prev = arr[i - 1];
        next = arr[i + 1];
        sum = parseInt(prev) + parseInt(next);
      };
      return sum;
    });
    //example: 1+2*3*4
    let rep = a.replace(`${prev}+${next}`, sum.toString());
    // console.log('a', a, 'product', product, 'rep', rep);
   return evaluateArray([rep]);
  } else if (groupVals.includes('-')) {
    let diff, prev, next;
    groupVals.filter((v, i, arr) => {
      if (v === '-') {
        prev = arr[i - 1];
        next = arr[i + 1];
        diff = parseInt(prev) - parseInt(next);
      };
      return diff;
    });
    //example: 1+2*3*4
    let rep = a.replace(`${prev}-${next}`, diff.toString());
    // console.log('a', a, 'product', product, 'rep', rep);
    return evaluateArray([rep]);
  }
  return a;
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
      return operatorArray;
    case "EQUALS_CLICKED":
      let equalsArray = state.slice();
      // 3 + 5 * 6 - 2 / 4
      return [evaluateArray(equalsArray)];
    case "CLEAR_CLICKED":
      let clearArray = state.slice();
      clearArray = [];
      return clearArray;
    default:
      return state;
  }
}
