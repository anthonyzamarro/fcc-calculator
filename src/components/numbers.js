import React from "react";
import { connect } from "react-redux";
// import NumbersContainer from "../containers/numbersContainer";

const Numbers = props => {
  return props.numDisplayReducer.map(number => (
    <li
      key={number.id}
      id={number.id}
      onClick={e => props.numberClick(number.number)}
      value={number.number}
    >
      {number.number}
    </li>
  ));
};

function mapStateToProps(data) {
  return data;
}
export default connect(
  mapStateToProps,
  null
)(Numbers);
