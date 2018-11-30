import React, { Component } from "react";
import { connect } from "react-redux";
import Numbers from "./numbers";
import Operators from "./operators";
import Results from "./results";
import Equals from "./equals";
import Clear from "./clear";
import Decimal from "./decimal";
import { nClicked } from "../actions/numClicked";
import { oClicked } from "../actions/opClicked";
import { eqClicked } from "../actions/eqClicked";
import { clrClicked } from "../actions/clrClicked";
import { dcmlClicked } from "../actions/dcmlClicked";

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
  handleDecimal(e) {
    this.props.decimalClicked(e);
  }
  render() {
    return (
      <div className="calculator">
        Results:
        <Results />
        <Clear className="clear" clearClicked={(this.handleClear = this.handleClear.bind(this))}/>
        <ul className="operations">
          <Operators operatorClicked={(this.handleOperation = this.handleOperation.bind(this))}/>
          <Equals equalsClicked={(this.handleEquals = this.handleEquals.bind(this))}/>
        </ul>
        <ul className="numbers">
          <Numbers
            numberClick={(this.handleNumber = this.handleNumber.bind(this))}
          />
        </ul>
        <ul>
          <Decimal
            decimalClicked={(this.handleNumber = this.handleDecimal.bind(this))}
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
    },
    decimalClicked: data => {
      dispatch(dcmlClicked(data));
    }
  };
}

export default connect(
  null,
  maptDispatchToProps
)(Calculator);
