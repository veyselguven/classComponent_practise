import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";
import axios from "axios";
import { Link } from "react-router-dom";
class User extends Component {
  state = {
    isVisible: false,
  };
  // static defaultProps = {
  //   name: "Default name",
  //   salary: "Default Salary",
  //   departman: "Defauult Departman",
  // };
  // constructor(props) {
  //   super(props);
  //   this.onClickEvent = this.onClickEvent.bind(this);
  // }

  onClickEvent = (number, e) => {
    // console.log(e.target);
    // console.log("test");
    // console.log(this);
    // console.log(number);
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = async (dispatch, e) => {
    const { id } = this.props;
    // delete request
    await axios.delete(`http://localhost:3004/users/${id}`);

    // consumerdan dispatch gelicek
    dispatch({ type: "DELETE_USER", payload: id });
  };

  componentWillUnmount = () => {
    console.log("componentwillunmount");
    // mesela componentlerimizi kaldirmadan hemen once belli abonelikler varsa bunlari iptal edebilrisniz
    // veya kaynaklari serbest birakmak icin bu componentwill unmount uda kullanabilirsiniz
  };

  render() {
    console.log("userprops=>", this.props);
    const { id, name, departmant, salary } = this.props;
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div
              style={
                isVisible
                  ? { backgroundColor: "#ff69b4", color: "white" }
                  : null
              }
            >
              <p
                onClick={this.onClickEvent.bind(this, 34)}
                style={{ cursor: "pointer" }}
              >
                isim:{name}{" "}
                <i
                  onClick={this.onDeleteUser.bind(this, dispatch)}
                  style={{ paddingLeft: "100px", cursor: "pointer" }}
                >
                  X
                </i>
              </p>
              {isVisible ? (
                <ul>
                  <li>departman:{departmant}</li>
                  <li>Salary:{salary}</li>
                  <Link to={`edit/${id}`}>
                    <button style={{ backgrounColor: "blue" }}>Update</button>
                  </Link>
                </ul>
              ) : null}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
User.defaultProps = {
  name: "Default name",
  salary: "Default Salary",
  departman: "Default Departman",
};
User.protoTypes = {
  name: PropTypes.string.isRequired,
  departman: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
};

export default User;
