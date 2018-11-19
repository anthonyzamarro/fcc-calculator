import React, { Component } from "react";
import { connect } from "react-redux";
import Numbers from "./numbers";
import Operators from "./operators";
import Results from "./results";
import Equals from "./equals";
import { nClicked } from "../actions/numClicked";
import { oClicked } from "../actions/opClicked";
import { eqClicked } from "../actions/eqClicked";

class Calculator extends Component {
  handleNumber(e) {
    this.props.numberClicked(e);
  }
  handleOperation(e) {
    this.props.operatorClicked(e);
  }
  handleEquals(e) {
    this.props.equalsClicked(e);
  }
  render() {
    return (
      <div className="calculator">
        <Results />
        <ul>
          <Operators operatorClicked={(this.handleOperation = this.handleOperation.bind(this))}/>
          <Equals equalsClicked={(this.handleEquals = this.handleEquals.bind(this))}/>
        </ul>
        <ul>
          <Numbers
            numberClick={(this.handleNumber = this.handleNumber.bind(this))}
          />
        </ul>
      </div>
    );
  }
}

function maptDispatchToProps(dispatch) {
  return {
    numberClicked: data => {
      dispatch(nClicked(data));
    },
    operatorClicked: data => {
      dispatch(oClicked(data));
    },
    equalsClicked: data => {
      dispatch(eqClicked(data));
    }
  };
}

export default connect(
  null,
  maptDispatchToProps
)(Calculator);
