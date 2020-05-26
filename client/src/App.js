import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserSignUp from "./pages/UserSignUp";
import UserLogin from "./components/LoginForm";
import MyCourses from "./pages/MyCourses";
import Home from "./pages/HomePage";
import HTML from "./pages/HTML_Activites";
import Html1 from "./pages/HTML1";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Navbar";
import API from "./utils/API";
import Courseform from "./components/Courseform";
import Footer from "./components/Footer";

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
      if (response.data.user) {
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

  onSubmit = (fields) => {
    console.log("App comp got: ", fields);
  };

  render = () => {
    return (
      <Router>
        <NavBar
          updateUser={this.updateUser}
          loggedIn={this.state.loggedIn}
          user={this.state.email}
        />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/dashboard" render={() => <MyCourses />} />
          <Route exact path="/add" component={UserSignUp} />
          <Route
            exact
            path="/login"
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
        <Footer />
      </Router>
    );
  };
}

export default App;
