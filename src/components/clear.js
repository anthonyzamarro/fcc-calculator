import React from "react";
import { connect } from "react-redux";

const Clear = props => {
  return props.clrDisplayReducer.map(clear => (
    <div 
      key={clear.id}
      id={clear.id}
      className="clear"
      onClick={e => props.clearClicked(clear.clear)}
    >
      {clear.clear}
    </div>
  ));
};

function mapStateToProps(data) {
  return data;
}
export default connect(
  mapStateToProps,
  null
)(Clear);
