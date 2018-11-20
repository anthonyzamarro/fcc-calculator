export function eqClicked(eq) {
	// console.log("eqClicked Action:", eq);
	return {
		type: "EQUALS_CLICKED",
		payload: eq
	}	
}