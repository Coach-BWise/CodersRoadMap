import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Model from "../Models/Solution";

const useStyles = makeStyles({
  root: {
    width: 1000,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

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
        {/* Activity 1 Card */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Your Challenge:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                In a new HTML file, create the basic structure of an HTML
                document and include the following in it:
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="li">
                DOCTYPE declaration
              </Typography>
              <Typography variant="body2" color="textSecondary" component="li">
                Head tag with a title tag
              </Typography>
              <Typography variant="body2" color="textSecondary" component="li">
                H1 tag with a title of your choice
              </Typography>
              <Typography variant="body2" color="textSecondary" component="li">
                Embed an image
              </Typography>
              <Typography variant="body2" color="textSecondary" component="li">
                One link that is target="_blank" so that it opens a new tab when
                clicked on
              </Typography>
              <Typography variant="body2" color="textSecondary" component="li">
                A second link that is bold.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="li">
                A third link that is a placeholder so it goes nowhere.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              marginTop: 62,
            }}
          >
            <Button
              size="small"
              color="primary"
              href="https://thandley19.github.io/html-activites-1/solution.html"
              target="_blank"
            >
              View Solution
            </Button>
            <Button
              size="small"
              color="primary"
              href="https://github.com/THandley19/html-activites-1/blob/master/solution.html"
              target="_blank"
            >
              View Source Code
            </Button>
            <Model />
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
