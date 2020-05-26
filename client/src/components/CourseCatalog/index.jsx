import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import API from "../../utils/API";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";

const useStyles = makeStyles({
  root: {
    maxwidth: 400,
  },
});

class CourseCatalog extends Component {
  state = {
    name: "",
    description: "",
    courses: [],
  };

  // loads user courses when page loads
  componentDidMount() {
    this.loadCourses();
  }

  componentWillUpdate() {
    this.loadCourses();
  }

  loadCourses = () => {
    API.getCourses()
      .then((res) =>
        this.setState({ courses: res.data, name: "", description: "" })
      )
      .catch((err) => console.log(err));
  };

  handleEnroll = (arg) => {
    API.enrollUser(arg)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.courses);
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
            {this.state.courses.map((course) => (
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
                    style={{
                      maxHeight: 166,
                    }}
                    image={course.image}
                    title={course.name}
                    className="img-fluid"
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
                      Taught by: {course.creator.firstName}{" "}
                      {course.creator.lastName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Description: {course.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={course.activityLinks}
                    onClick={this.handleEnroll.bind(this, course._id)}
                  >
                    Enroll
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CourseCatalog;
