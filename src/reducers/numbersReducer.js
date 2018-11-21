function evaluateArray(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		let newArr = [];
		let convertNum = parseFloat(array[i]);
		let convertNextNum = parseFloat(array[i + 1]);
		if (Number.isInteger(convertNextNum)) {
			console.log('convertNume',convertNum, 'convertNextNum',convertNextNum);
		}
	}
	console.log(array)
	return 'calculate';
}

export default function(state = [], action) {
  switch (action.type) {
    case "NUMBER_CLICKED":
	    let numberArray = state.slice();
	    numberArray.push(action.payload);
	    let zeroFirst = numberArray[0];
	    if (zeroFirst === '0') {
	    	numberArray.shift();
	    }
	    return numberArray;
	case 'OPERATOR_CLICKED':
		let operatorArray = state.slice();
	  	operatorArray.push(action.payload);
	  	// console.log('OPERATOR_CLICKED',operatorArray);
	  	return operatorArray;
	case 'EQUALS_CLICKED':
		let equalsArray = state.slice();
		evaluateArray(equalsArray);
		// console.log(blah)
		// let val = equalsArray.join('');
		return [2];
	case 'CLEAR_CLICKED':
		let clearArray = state.slice();
		// console.log('CLEAR_CLICKED', clearArray);
		clearArray = [];
		return clearArray;
    default:
      return state;
  }
}
