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
  if (parseFloat(negativeFinal) < 0) return negativeFinal;
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
  } else if (groupVals.includes("+") || groupVals.includes("-")) {
    groupVals.filter((a,i,arr) => {
      if (a === '-') {
        arr[i + 1] = `-${arr[i + 1]}`;
        return arr;
      }
    });
    let t = groupVals.filter((a,i,v) => {if (parseFloat(a)) return a})
    let g = t.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr));
    return [g];
    // return evaluateArray([eval(groupVals.join(''))]);
  }
  // else if (groupVals.includes("+")) {
  //   let sum, prev, next;
  //   groupVals.filter((v, i, arr) => {
  //     if (v === "+") {
  //       prev = arr[i - 1];
  //       next = arr[i + 1];
  //       sum = parseFloat(prev) + parseFloat(next);
  //     }
  //     return sum;
  //   });
  //   let rep = a.replace(`${prev}+${next}`, sum.toString());
  //   return evaluateArray([rep]);
  // } 
  // else if (groupVals.includes("-")) {
  //   let diff, prev, next;
  //   groupVals.filter((v, i, arr) => {
  //     if (v === "-") {
  //       prev = arr[i - 1];
  //       next = arr[i + 1];
  //       diff = parseFloat(prev) - parseFloat(next);
  //     }
  //     return diff;
  //   });
  //   let rep = a.replace(`${prev}-${next}`, diff.toString());
  //   return evaluateArray([rep]);
  // }
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
      // let j = numberArray.join("").match(/^([\d]*\.{1,}[\d]+|[\d]+)|([-+*/](?=\.|[\d]))|\.[\d]+|[\d]+/g);
      // console.log(j);

      // credit for this awesome code goes to this person:
      // https://stackoverflow.com/questions/53697325/javascript-regex-to-match-math-expression/53697367#53697367
      const clean = str => str
      // Match zero or more digits, followed by a decimal,
      // followed by more decimal and period characters
      // For everything past the first decimal, replace decimals with the empty string
      .replace(
        /(\d*\.)([\d.]+)/g,
        (_, g1, g2) => {
          // console.log('_',_,'g1',g1,'g2',g2)
          return g1 + g2.replace(/\./g, '')
        }
      )
      // Match 2 or more operators, capture the last operator in a group
      // Replace with the last operator captured
      .replace(
        /([-+/*]){2,}/g,
        '$1'
      );
      return [clean(numberArray.join(''))];
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
      return [evaluateArray(equalsArray)];
    case "CLEAR_CLICKED":
      let clearArray = state.slice();
      clearArray = [];
      return clearArray;
    default:
      return state;
  }
}
