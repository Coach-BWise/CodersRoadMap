import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class UserDetails extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, handleSubmit } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar>
            <h2>CodersRoadMap</h2>
          </AppBar>
          <br />
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter A Password"
            label="Password"
            onChange={handleChange("password")}
            defaultValue={values.password}
            margin="normal"
            fullWidth
          />
          <br />
          <Button color="primary" variant="contained" onClick={this.continue}>
            Continue
          </Button>
        </>
      </MuiThemeProvider>
    );
  }
}

export default UserDetails;
