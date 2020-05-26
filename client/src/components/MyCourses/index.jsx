import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./style.css";
import API from "../../utils/API";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

class Dashboard extends Component {
  state = {
    name: "",
    description: "",
    courses: [],
    isEnrolled: [],
  };

  // loads user courses when page loads
  componentDidMount() {
    this.loadCourses();
  }

  // sends request to API helper to load courses that the user has enrolled in
  loadCourses = () => {
    API.getUserCourses()
      .then((res) =>
        this.setState({ courses: res.data, name: "", description: "" })
      )
      .catch((err) => console.log(err));
  };

  handleUnenroll = (arg) => {
    API.unenrollUser(arg)
      .then((res) => this.forceUpdate())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div
          style={{
            paddingBottom: "30px",
            position: "relative",
          }}
        >
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {this.state.courses.length == 0 ? (
              <div>
                <h1>You are not currenly enrolled in any courses.</h1>
                <a href="/all-courses"> View Courses</a>
              </div>
            ) : (
              this.state.courses.map((course) => (
                <Card
                  className={useStyles.root}
                  style={{
                    marginTop: 30,
                    marginLeft: 35,
                    width: 400,
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={course.name}
                      height="100"
                      image={course.image}
                      title={course.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {course.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {course.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary" href="/">
                      Units
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      href={course.link}
                      target="_blank"
                      onClick={this.handleUnenroll.bind(this, course._id)}
                    >
                      Drop Course
                    </Button>
                  </CardActions>
                </Card>
              ))
            )}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Dashboard;
