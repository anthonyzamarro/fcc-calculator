import React from "react";
import { connect } from "react-redux";
// import NumbersContainer from "../containers/numbersContainer";

const Operators = props => {
  return props.opDisplayReducer.map(operator => (
    <li 
    	key={operator.id}
      id={operator.id}
    	onClick={e => props.operatorClicked(operator.operation)}
    >
    	{operator.operation}
    </li>
  ));
};

function mapStateToProps(data) {
  return data;
}
export default connect(
  mapStateToProps,
  null
)(Operators);
