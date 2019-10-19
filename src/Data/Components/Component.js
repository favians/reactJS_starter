import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Components extends Component {
  render() {
    return (
      <div>
        <h1>This is Component</h1>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Components));
