import React, { Component } from "react";
import { connect } from "react-redux";
import Numbers from "./numbers";
import Operators from "./operators";
import Results from "./results";
import Equals from "./equals";
import Clear from "./clear";
import { nClicked } from "../actions/numClicked";
import { oClicked } from "../actions/opClicked";
import { eqClicked } from "../actions/eqClicked";
import { clrClicked } from "../actions/clrClicked";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props
    }
  }
  handleNumber(e) {
    this.props.numberClicked(e);
  }
  handleOperation(e) {
    this.props.operatorClicked(e);
  }
  handleEquals(e) {
    this.props.equalsClicked(e);
  }  
  handleClear(e) {
    this.props.clearClicked(e);
  }
  render() {
    return (
      <div className="calculator">
        Results:
        <Results />
        <ul>
          <Operators operatorClicked={(this.handleOperation = this.handleOperation.bind(this))}/>
          <Equals equalsClicked={(this.handleEquals = this.handleEquals.bind(this))}/>
          <Clear clearClicked={(this.handleClear = this.handleClear.bind(this))}/>
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
    },
    clearClicked: data => {
      dispatch(clrClicked(data));
    }
  };
}

export default connect(
  null,
  maptDispatchToProps
)(Calculator);
