function evaluateArray(array) {
  console.log("array before", array);
  let a = array.join("");
  let groupVals = a.match(/[\d]+|[\D]+/g);
  if (groupVals.includes(".")) {
    groupVals = groupVals
      .join("")
      .match(/\.[\d]|[\d]+\.[\d]+|\.[\d]|[\d]+|[\D]|\.[\D]+/g);
  }
  let negativeFinal = array.slice(0, 1).pop();
  if (parseFloat(negativeFinal) < 0) {
    return negativeFinal;
  }
  if (groupVals.includes("*")) {
    let product, prev, next;
    groupVals.filter((v, i, arr) => {
      if (v === "*") {
        prev = arr[i - 1];
        next = arr[i + 1];
        product = parseFloat(prev) * parseFloat(next);
      }
      return product;
    });
    let rep = a.replace(`${prev}*${next}`, product.toString());
    return evaluateArray([rep]);
  } else if (groupVals.includes("/")) {
    let quotient, prev, next;
    groupVals.filter((v, i, arr) => {
      if (v === "/") {
        prev = arr[i - 1];
        next = arr[i + 1];
        quotient = parseFloat(prev) / parseFloat(next);
      }
      return quotient;
    });
    let rep = a.replace(`${prev}/${next}`, quotient.toString());
    return evaluateArray([rep]);
  } else if (groupVals.includes("+")) {
    let sum, prev, next;
    groupVals.filter((v, i, arr) => {
      if (v === "+") {
        prev = arr[i - 1];
        next = arr[i + 1];
        sum = parseFloat(prev) + parseFloat(next);
        console.log(sum);
      }
      return sum;
    });
    let rep = a.replace(`${prev}+${next}`, sum.toString());
    return evaluateArray([rep]);
  } else if (groupVals.includes("-")) {
    let diff, prev, next;
    groupVals.filter((v, i, arr) => {
      if (v === "-") {
        prev = arr[i - 1];
        next = arr[i + 1];
        diff = parseFloat(prev) - parseFloat(next);
      }
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
      // ([-+*/](?=\.|[\d]+) ---> matches operators
      // ^(?:\d*\.\d{1,}|\d+|)$

      // ^([\d]*\.{1,}[\d]+|[\d]+)|([-+*/](?=\.|[\d]+)|[\d])

      // let j = numberArray.join("").match(/(^\.{0,1}|[\d]+)|[\d]*\.[\d]+|[\d]|[-+*/](?![\D]+)/g);

      let j = numberArray.join("").match(/^([\d]*\.{1,}[\d]+|[\d]+)|([-+*/](?=\.|[\d]))|\.[\d]+|[\d]+/g);
      // console.log(j);
      let b;
      if (j !== null) {
        b=j.join('').split(/([-+*/])/).filter((a,i,arr) => {
          if (a.includes('.')) {
            let firstIndex = a.indexOf('.');
            let lastIndex = a.lastIndexOf('.');
            if (firstIndex < lastIndex) {
              a.substring(0, lastIndex);
              // return a;
            }
          }
          console.log(a, arr);
          return a;
        })
      }
      // console.log(b);
      return numberArray;
    case "OPERATOR_CLICKED":
      let operatorArray = state.slice();
      operatorArray.push(action.payload);
      let opFirst = operatorArray[0];
      switch (opFirst) {
        case "+":
          operatorArray.shift();
          break;
        case "-":
          operatorArray.shift();
          break;
        case "/":
          operatorArray.shift();
          break;
        case "*":
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
