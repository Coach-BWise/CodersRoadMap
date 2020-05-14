import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import NavBar from "../Navbar";
import "../HTMLActivites1";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
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
            <CardMedia
              component="img"
              alt="html image"
              height="140"
              image="https://www.tutorialrepublic.com/lib/images/html-illustration.png"
              title="html image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Activity 1
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              marginTop: 62,
            }}
          >
            <Button size="small" color="primary" href="/html-activites-1">
              Begin
            </Button>
            <Button
              size="small"
              color="primary"
              href="https://www.youtube.com/watch?v=UB1O30fR-EE"
              target="_blank"
            >
              Help
            </Button>
          </CardActions>
        </Card>
        {/* Activity 2 Card */}
        <Card
          className={classes.root}
          style={{
            marginLeft: 35,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="html image"
              height="140"
              image="https://www.tutorialrepublic.com/lib/images/html-illustration.png"
              title="html image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Activity 2
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              marginTop: 62,
            }}
          >
            <Button size="small" color="primary" href="/html-activites-1">
              Begin
            </Button>
            <Button
              size="small"
              color="primary"
              href="https://www.youtube.com/watch?v=UB1O30fR-EE"
              target="_blank"
            >
              Help
            </Button>
          </CardActions>
        </Card>
        {/* Activity 3 Card */}
        <Card
          className={classes.root}
          style={{
            marginLeft: 35,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="html image"
              height="140"
              image="https://www.tutorialrepublic.com/lib/images/html-illustration.png"
              title="html image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Activity 3
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              marginTop: 62,
            }}
          >
            <Button size="small" color="primary" href="/html-activites-1">
              Begin
            </Button>
            <Button
              size="small"
              color="primary"
              href="https://www.youtube.com/watch?v=UB1O30fR-EE"
              target="_blank"
            >
              Help
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
