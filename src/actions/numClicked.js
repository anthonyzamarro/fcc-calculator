export function nClicked(num) {
  // console.log("nClicked Action:", num);
  return {
    type: "NUMBER_CLICKED",
    payload: num
  };
}
