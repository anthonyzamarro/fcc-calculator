import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    console.log(this.props);
    let displayNumResults = this.props.nums.map(number => {
      return number;
    });
    return (
      <div className="results" id="display">
        Results:
        {displayNumResults}
      </div>
    );
  }
}

function mapStateToProps(data) {
  return {
    nums: data.numbersReducer,
  };
}
export default connect(
  mapStateToProps,
  null
)(Results);
