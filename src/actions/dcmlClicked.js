export function dcmlClicked(dcml) {
	// console.log("dcmlClicked Action:", dcml);
	return {
		type: "DECIMAL_CLICKED",
		payload: dcml
	}	
}