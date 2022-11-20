import React, { Component } from "react";
import posed from "react-pose";
//import uuid from "react-uuid";
import UserConsumer from "../context";
import axios from "axios";

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});
class AddUser extends Component {
  state = {
    visible: false,
    name: "",
    departmant: "",
    salary: 0,
  };
  changeVisibility = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  changeInput = (e) => {
    this.setState({
      //name="name"
      [e.target.name]: e.target.value,
    });
  };

  addUser = async (dispatch, e) => {
    e.preventDefault();
    console.log("test");
    const { name, departmant, salary } = this.state;

    const newUser = {
      // id: uuid(), // artik ihtiyacimiz yok cunku json server
      //otomatikmen unique  id aticak
      name: name,
      departmant: departmant,
      salary: salary,
    };
    const res = await axios.post("http://localhost:3004/users", newUser);
    // console.log("postres", res);
    //console.log(newUser);
    dispatch({ type: "ADD_USER", payload: res.data });
    this.setState({
      name: "",
      departmant: "",
      salary: 0,
    });
  }; //payload: newUser
  // bu sekildede yakalayabuliriz veya yukardaki gibi e.target sakilinde
  //   changeName = (e) => {
  //     this.setState({
  //       name: e.target.value,
  //     });
  //   };
  //   changeDepartman = (e) => {
  //     this.setState({
  //       departman: e.target.value,
  //     });
  //   };
  //   changeSalary = (e) => {
  //     this.setState({
  //       salary: e.target.value,
  //     });
  //   };

  render() {
    const { visible, name, salary, departmant } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div>
              <button
                style={{ backgroundColor: "blue" }}
                onClick={this.changeVisibility}
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>
              <Animation pose={visible ? "visible" : "hidden"}>
                <div>
                  <h1>Addd User Form </h1>
                  <div>
                    <form onSubmit={this.addUser.bind(this, dispatch)}>
                      <div>
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="id"
                          placeholder="Enter name"
                          value={name}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div>
                        <label htmlFor="departmant">departmant</label>
                        <input
                          type="text"
                          name="departmant"
                          id="departmant"
                          placeholder="Enter departmant"
                          value={departmant}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div>
                        <label htmlFor="salary">Salary</label>
                        <input
                          type="number"
                          name="salary"
                          id="salary"
                          placeholder="Enter salary"
                          value={salary}
                          onChange={this.changeInput}
                        />
                      </div>
                      <button
                        type="submit"
                        style={{ backgroundColor: "red", cursor: "pointer" }}
                      >
                        Add User
                      </button>
                    </form>
                  </div>
                  <hr />
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
