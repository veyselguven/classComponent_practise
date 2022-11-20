import React, { Component } from "react";

import NavBar from "./layout/NavBar";
import "./App.css";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
// import Test from "./components/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Contributes from "./pages/Contributes";

class App extends Component {
  //  {/* <Test test={"deneme"} /> */}

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar title="User App 2" />
          <hr />
          <Routes>
            <Route exact path="/" element={<Users />} />
            <Route exact path="/add" element={<AddUser />} />
            <Route exact path="/github" element={<Contributes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
