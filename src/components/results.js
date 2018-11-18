import React, { Component } from "react";
import { connect } from "react-redux";

class Results extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="results">
        Results:
        {this.props.data.payload}
      </div>
    );
  }
}

function mapStateToProps(data) {
  return {
    data: data.numbersReducer
  };
}
export default connect(
  mapStateToProps,
  null
)(Results);
