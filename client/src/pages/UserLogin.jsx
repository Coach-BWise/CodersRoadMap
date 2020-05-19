import React, { Component } from "react";
import LoginForm from "../components/LoginForm";

class UserLogin extends Component {
  render() {
    return <LoginForm updateUser={this.updateUser} />;
  }
}

export default UserLogin;
