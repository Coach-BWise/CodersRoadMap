import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add" component={UserSignUp} />
          <Route exact path="/login" component={UserLogin} />
        </Switch>
      </Router>
    );
  };
}

export default App;
