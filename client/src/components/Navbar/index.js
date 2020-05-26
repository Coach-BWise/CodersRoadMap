import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

class NavBar extends Component {
  state = {
    redirect: null,
    userData: {},
  };
  logout = this.logout.bind(this);

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("api/users/logout")
      .then((response) => {
        this.setState({ redirect: "true" });
      })
      .catch((error) => {
        console.log("Logout error " + error);
      });
  }

  componentDidMount() {
    this.getUser();
  }
  getUser() {
    API.getUser().then((res) => this.setState({ userData: res.data }));
  }

  instructor() {
    axios
      .post("api/users/instructor")
      .then((res) => this.getUser)
      .catch((error) => {
        console.log("Logout error " + error);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    const loggedIn = this.props.loggedIn;
    return (

      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a href="/dashboard" className="navbar-brand scrollTo">

              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/logo.png"}
              />
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarcollapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <span className="fa fa-bars"></span>
            </button>
            {loggedIn ? (
              <div id="navbarcollapse" className="collapse navbar-collapse">
                {!this.state.userData.user.isInstructor ? (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a href="/" className="nav-link link-scroll">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="dropdown">
                        <a
                          href="#references"
                          className="nav-link link-scroll dropbtn"
                        >
                          Courses
                        </a>

                        <div className="dropdown-content">
                          <a href="/dashboard">My Courses</a>

                          <a href="/all-courses">All Courses</a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/dashboard"
                        className="nav-link link-scroll"
                        onClick={this.instructor}
                      >
                        Become An Instructor
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link-scroll"
                        href="/login"
                        onClick={this.logout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a href="/" className="nav-link link-scroll">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="dropdown">
                        <a
                          href="#references"
                          className="nav-link link-scroll dropbtn"
                        >
                          Courses
                        </a>

                        <div className="dropdown-content">
                          <a href="/dashboard">Enrolled Courses</a>

                          <a href="/all-courses">All Courses</a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="/course" className="nav-link link-scroll">
                        Create a Course
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link link-scroll"
                        href="/login"
                        onClick={this.logout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <div id="navbarcollapse" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="/" className="nav-link link-scroll">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/all-courses"
                      className="nav-link link-scroll dropbtn"
                    >
                      Courses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link link-scroll">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
