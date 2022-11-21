import React, { Component } from "react";
import UserConsumer from "../context";
//import axios from "axios";

class UpdateUser extends Component {
  state = {
    name: "",
    departmant: "",
    salary: 0,
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount = async () => {
    // //bu cdm ile kullanici bilgilerini yerlestirmis olduk
    // const { id } = this.props.match.params;
    // const res = await axios.get(`http://localhost:3004/users/${id}`);
    // const { name, salary, departmant } = res.data;
    // this.setState({
    //   name,
    //   salary,
    //   departmant,
    // });
  };

  updateUser = async (dispatch, e) => {
    e.preventDefault();
    // update User
    const { name, salary, departmant } = this.state;
    // const { id } = this.props.match.params;

    const updatedUser = {
      name,
      salary,
      departmant,
    };
    console.log("updatedUser", updatedUser);

    // const response = await axios.put(
    //   `http://localhost:3000/edit/${id}`,
    //   updatedUser
    // );
    // dispatch({ type: "UPDATE_USER", payload: response.data });
    // Redirect
    //this.props.history.push("/");
  };
  render() {
    const { name, salary, departmant } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div>
              <div>
                <h1>Update User Form </h1>
                <div>
                  <form onSubmit={this.updateUser.bind(this, dispatch)}>
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
                      Update User
                    </button>
                  </form>
                </div>
                <hr />
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default UpdateUser;
