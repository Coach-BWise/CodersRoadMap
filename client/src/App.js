import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import HTML from "./pages/HTML_Activites";
import Html1 from "./pages/HTML1";
import NoMatch from "./pages/NoMatch";
import axios from "axios";
import NavBar from "./components/Navbar";
import API from "./utils/API";

class App extends Component {
  state = {
    loggedIn: false,
    email: null,
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    API.getUser().then((response) => {
      console.log(response);
      if (response.data.user) {
        console.log("user data in app.js " + response.data.user);
        this.setState({
          loggedIn: true,
          email: response.data.email,
        });
      } else {
        this.setState({
          loggedIn: false,
          email: null,
        });
      }
    });
  }

  render = () => {
    return (
      <Router>
        <div>
          <NavBar
            updateUser={this.updateUser}
            loggedIn={this.state.loggedIn}
            user={this.state.email}
          />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/add" component={UserSignUp} />
            <Route
              exact
              path="/"
              render={() => <UserLogin updateUser={this.updateUser} />}
            />
            <Route exact path="/html" component={HTML} />
            <Route
              exact
              path="/html/1"
              render={() => <Html1 updateUser={this.updateUser} />}
            />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
