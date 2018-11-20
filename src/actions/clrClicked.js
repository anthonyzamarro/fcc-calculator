export function clrClicked(clr) {
	console.log("clrClicked Action:", clr);
	return {
		type: "CLEAR_CLICKED",
		payload: clr
	}	
}