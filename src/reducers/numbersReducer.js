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
		let val = equalsArray.join('');
		return [eval(val).toString()];
    default:
      return state;
  }
}
