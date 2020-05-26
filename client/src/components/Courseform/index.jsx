import React, { Component } from "react";
import API from "../../utils/API";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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

export class CourseForm extends Component {
  state = {
    name: "",
    description: "",
    image: "",
    units: [],
    user: {},
    redirect: null,
    course: "",
  };

  componentDidMount() {
    this.getUser();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getUser() {
    API.getUser().then((res) => this.setState({ user: res.data }));
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.createCourse({
      name: this.state.name,
      description: this.state.description,
      creator: this.state.user.user._id,
      image: this.state.image,
    })
      .then((res) => this.setState({ redirect: "true" }, { course: res._id }))
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/all-courses" course={this.state.course} />;
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
                  label="Course Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  defaultValue={this.state.description}
                  required
                  fullWidth
                  id="description"
                  label="Course description"
                  name="description"
                  autoComplete="description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="image"
                  value={this.state.image}
                  onChange={this.handleInputChange}
                  defaultValue={this.state.image}
                  name="image"
                  variant="outlined"
                  required
                  fullWidth
                  id="image"
                  label="Course image"
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
      </Container>
    );
  }
}

export default CourseForm;
