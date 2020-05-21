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
import Courseform from "./components/Courseform";


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      email: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("api/users/").then((response) => {
      console.log(response);
      if (response.data.user) {
        console.log(response.data.user);

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
  };

  onSubmit = (fields) => {
    console.log("App comp got: ", fields);
  };

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
            <Route exact path="/course" component={Courseform} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
