function evaluateArray(array) {
	let calculate = array.map(item => {
		console.log(item);
	});
	return calculate;
}

export default function(state = [], action) {
  switch (action.type) {
    case "NUMBER_CLICKED":
	    let numberArray = state.slice();
	    numberArray.push(action.payload);
	    console.log('NUMBER_CLICKED',numberArray);
	    return numberArray;
	case 'OPERATOR_CLICKED':
		let operatorArray = state.slice();
	  	operatorArray.push(action.payload);
	  	console.log('OPERATOR_CLICKED',operatorArray);
	  	return operatorArray;
	case 'EQUALS_CLICKED':
		let equalsArray = state.slice();
		evaluateArray(equalsArray);
		// console.log(blah)
		// let val = equalsArray.join('');
		return [0];
	case 'CLEAR_CLICKED':
		let clearArray = state.slice();
		console.log('CLEAR_CLICKED', clearArray);
		clearArray = [0];
		return clearArray;
    default:
      return state;
  }
}
