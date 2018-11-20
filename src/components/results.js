import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    let numResults = this.props.nums.map(number => {
      return number;
    });
    let displayNumResults = numResults.length < 1 ? '0' : numResults;
    return (
      <div className="results" id="display">
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
