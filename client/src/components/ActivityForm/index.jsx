import React, { Component } from "react";
import API from "../../utils/API";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export class ActivityForm extends Component {
  state = {
    name: "",
    videos: "",
    redirect: null,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.createActivity({
      name: this.state.name,
      videos: this.state.videos,
    })
      .then((res) => this.setState({ redirect: "true" }))
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Container
        component="main"
        maxWidth="xs"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CssBaseline />
        <div className={useStyles.paper}>
          <Typography component="h1" variant="h5">
            Create Course
          </Typography>
          <form className={useStyles.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  defaultValue={this.state.name}
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Activity Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  name="videos"
                  id="videos"
                  onChange={this.handleInputChange}
                />
              </Grid>
            </Grid>
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
              onClick={this.handleFormSubmit}
            >
              Create
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default ActivityForm;
