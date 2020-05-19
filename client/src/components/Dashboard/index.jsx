import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavBar from "../Navbar";
import "../Dashboard/style.css";
import API from "../../utils/API";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

class Dashboard extends Component {
  state = {
    name: "",
    description: "",
    units: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getUnits()
      .then(
        (res) => this.setState({ units: res.data, name: "", description: "" }),
        console.log(this.state.units)
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="rowC"
        >
          {this.state.units.map((unit) => (
            <Card
              className={useStyles.root}
              style={{
                marginLeft: 35,
                width: 400,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={unit.name}
                  height="100"
                  image={unit.image}
                  title={unit.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {unit.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {unit.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={unit.activityLinks}>
                  Activites
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href={unit.link}
                  target="_blank"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Dashboard;
