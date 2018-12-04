function evaluateArray(array) {
  console.log("array before", array);
  let a = array.join("");
  let groupVals = a.match(/[\d]+|[\D]+/g);
  if (groupVals.includes('.')) {
    groupVals = groupVals.join('').match(/\.[\d]|[\d]+\.[\d]+|\.[\d]|[\d]+|[\D]|\.[\D]+/g);
  }
  let negativeFinal = array.slice(0, 1).pop();
  if (parseFloat(negativeFinal) < 0) {
    return negativeFinal;
  }
  if (groupVals.includes('*')) {
    let product, prev, next;
  	groupVals.filter((v, i, arr) => {
  		if (v === '*') {
        prev = arr[i - 1];
        next = arr[i + 1];
        product = parseFloat(prev) * parseFloat(next);
      };
      return product;
    });
    let rep = a.replace(`${prev}*${next}`, product.toString());
    return evaluateArray([rep]);
  } else if (groupVals.includes('/')) {
    let quotient, prev, next;
    groupVals.filter((v, i, arr) => {
      if (v === '/') {
        prev = arr[i - 1];
        next = arr[i + 1];
        quotient = parseFloat(prev) / parseFloat(next);
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
        sum = parseFloat(prev) + parseFloat(next);
        console.log(sum);
      };
      return sum;
    });
    let rep = a.replace(`${prev}+${next}`, sum.toString());
   return evaluateArray([rep]);
  } else if (groupVals.includes('-')) {
    let diff, prev, next;
    groupVals.filter((v, i, arr) => {
      if (v === '-') {
        prev = arr[i - 1];
        next = arr[i + 1];
        diff = parseFloat(prev) - parseFloat(next);
      };
      return diff;
    });
    let rep = a.replace(`${prev}-${next}`, diff.toString());
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
      // let j = numberArray.join('').match(/[-+*/]+|[\d]+|\.[0-9]+(?!\.)|[0-9]+\.?[0-9]+(?!\.)/g);
      // match a decimal number that can have the point at the beginning or somewhere in the middle
      // once that decimal is matched, there cannot be any more decimals to follow it until 
      // the next operator sign is matched. 
      // cannot have consecutive decimals in a row.
      // cannot have consecutive operators in a row.
      let j = numberArray.join('').match(/^\.|[-+/*]?([0-9]*\.{0,1}[0-9]+|[0-9]+)/g);
      // if (j !== null) {
        console.log(j.join('').split(''));
      // }
      // numberArray.forEach((a,i,arr) => {
      //   if (a === '.') {
      //     if (arr[i + 1] === '.') {
      //       let index = arr.lastIndexOf(arr[i+1]);
      //       arr.splice(index, 1);
      //     }
      //     let firstIndex = arr.indexOf(a);
      //     let lastIndex = arr.lastIndexOf(a);
      //     if (firstIndex < lastIndex && Number.isInteger(parseInt(arr[i + 1]))) {
      //       // arr.splice(lastIndex, 1);
      //     }
      //   }
      // });
      // console.log(numberArray);
      // return j.join('').split('');
      return numberArray;
    case "OPERATOR_CLICKED":
      let operatorArray = state.slice();
      operatorArray.push(action.payload);
      let opFirst = operatorArray[0];
      switch(opFirst) {
        case '+':
          operatorArray.shift();
          break;
        case '-':
          operatorArray.shift();
          break;
        case '/':
          operatorArray.shift();
          break;
        case '*':
          operatorArray.shift();
          break;
        default:
      }
      return operatorArray;
    // case "DECIMAL_CLICKED":
    //   let decState = state.slice();
    //   let dec = [action.payload];
    //   let addDec = decState.concat(dec);
    //   return addDec;
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
