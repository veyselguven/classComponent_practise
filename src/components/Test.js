/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    console.log("testprops", this.props); // super in icine yazmazsan propsu undefined olur.
    this.state = {
      a: 10,
    };
    console.log("constructor");
  }
  componentDidMount = () => {
    console.log("Component Did mount");
    //Api istekleri
    this.setState({
      a: 20,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate");
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("shouldComponentUpdate");
    // return true;
    return false;
  };

  render() {
    console.log("render");
    return <div></div>;
  }
}
export default Test;
