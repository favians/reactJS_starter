import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
          <h1>Hello</h1>
      </div>
    );
  }
}

export default connect(
  "",
actions)(withRouter(Footer));