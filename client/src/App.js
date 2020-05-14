import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./pages/UserLogin";
import Dashboard from "./pages/Dashboard";
import HTML from "./pages/HTML_Activites";
import Html1 from "./pages/HTML1";

class App extends Component {
  render = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/add" component={UserSignUp} />
          <Route exact path="/" component={UserLogin} />
          <Route exact path="/html-activites" component={HTML} />
          <Route exact path="/css-activites" component={HTML} />
          <Route exact path="/js-activites" component={HTML} />
          <Route exact path="/html-activites-1" component={Html1} />
        </Switch>
      </Router>
    );
  };
}

export default App;
