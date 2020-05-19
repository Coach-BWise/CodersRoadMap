import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      redirect: null,
    };
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("api/users/logout")
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
          });
          this.setState({
            redirect: "true",
          });
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    const loggedIn = this.props.loggedIn;
    console.log(useStyles);
    return (
      <div className={useStyles.root}>
        {loggedIn ? (
          <AppBar position="static" id="nav-container">
            <Toolbar>
              <Button
                color="white"
                to="#"
                className="btn btn-link text-secondary"
                onClick={this.logout}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        ) : (
          <AppBar position="static" id="nav-container">
            <Toolbar>
              <IconButton
                edge="start"
                className={useStyles.menuButton}
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Button color="inherit" href="/">
                Home
              </Button>
            </Toolbar>
          </AppBar>
        )}
      </div>
    );
  }
}

export default NavBar;
