import React, { Component } from "react";
import { connect } from "react-redux";
import Numbers from "./numbers";
import Operators from "./operators";
import Results from "./results";
import { nClicked } from "../actions/numClicked";

class Calculator extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     numsChain: []
  //   };
  //   ;
  // }
  handleClick(e) {
    // console.log("handleClick", e);
    // console.log(this.props);
    this.props.numberClicked(e);
  }
  render() {
    return (
      <div className="calculator">
        <Results />
        <ul>
          <Operators />
        </ul>
        <ul>
          <Numbers
            numberClick={(this.handleClick = this.handleClick.bind(this))}
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
    }
  };
}

export default connect(
  null,
  maptDispatchToProps
)(Calculator);
