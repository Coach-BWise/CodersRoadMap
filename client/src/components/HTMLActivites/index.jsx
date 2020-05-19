import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../HTMLActivites1";
import API from "../../utils/API";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

class HTMLActivites extends Component {
  state = {
    name: "",
    activites: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getActivites()
      .then((res) => this.setState({ activites: res.data, name: "" }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="rowC"
      >
        {this.state.activites.map((activity) => (
          <Card
            className={useStyles.root}
            style={{
              marginLeft: 35,
              width: 200,
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {activity.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={activity.activityLinks}
              >
                Begin
              </Button>
              <Button
                size="small"
                color="primary"
                href={activity.helperLink}
                target="_blank"
              >
                Help
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

export default HTMLActivites;
