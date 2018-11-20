import React from "react";
import { connect } from "react-redux";

const Clear = props => {
  return props.clrDisplayReducer.map(clear => (
    <li 
      key={clear.id}
      id={clear.id}
      onClick={e => props.clearClicked(clear.clear)}
    >
      {clear.clear}
    </li>
  ));
};

function mapStateToProps(data) {
  return data;
}
export default connect(
  mapStateToProps,
  null
)(Clear);
