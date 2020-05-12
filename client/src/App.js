import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        {/* 
        <br />
        <Route path="/" exact component={UnitList} />
        <Route path="/edit/:id" exact component={EditUnit} />
        <Route path="/create" exact component={UploadUnit} />
        <Route path="/user" exact component={CreateUser} /> */}
      </Router>
    );
  }
}

export default App;
