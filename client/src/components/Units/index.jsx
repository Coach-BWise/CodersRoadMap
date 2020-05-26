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
import Plyr from "plyr";
import ImgMediaCard from "../HTMLActivites1";
const player = new Plyr("#player");

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});
class Units extends Component {
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
      <div>
        <div className="plyr__video-embed" id="player">
          <iframe
            src="https://www.youtube.com/embed/erfN7fH7A6s"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          ></iframe>
        </div>
        <div>
          <ImgMediaCard />
        </div>
      </div>
    );
  }
}
export default Units;
