export function oClicked(op) {
	// console.log("opClicked Action:", op);	
	return {
		type: "OPERATOR_CLICKED",
		payload: op
	}	
}