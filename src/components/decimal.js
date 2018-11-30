import React from "react";
import { connect } from "react-redux";

const Decimal = props => {
  return props.dcmlDisplayReducer.map(decimal => (
    <li 
      key={decimal.id}
      id={decimal.id}
      onClick={e => props.decimalClicked(decimal.decimal)}
    >
      {decimal.decimal}
    </li>
  ));
};

function mapStateToProps(data) {
  return data;
}
export default connect(
  mapStateToProps,
  null
)(Decimal);
