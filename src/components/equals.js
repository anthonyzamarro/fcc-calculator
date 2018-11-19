import React from "react";
import { connect } from "react-redux";

const Equals = props => {
  return props.eqDisplayReducer.map(equals => (
    <li 
      key={equals.id}
      id={equals.id}
      onClick={e => props.equalsClicked(equals.equal)}
    >
      {equals.equal}
    </li>
  ));
};

function mapStateToProps(data) {
  return data;
}
export default connect(
  mapStateToProps,
  null
)(Equals);
