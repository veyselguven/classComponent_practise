/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Update User</h3>
      </div>
    );
  }
}

export default UpdateUser;
