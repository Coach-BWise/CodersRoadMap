import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../HTMLActivites1/style.css";

const useStyles = makeStyles({
  root: {
    width: 1000,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <div className="rowC">
        {/* Activity 1 Card */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Your Challenge:
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                You will create an Express calculator application with one get
                route that is able to take in three parameters: an operation and
                two numbers.
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="li">
                There are four operation values which a user may use: addition,
                subtraction, multiplication, and division.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="li">
                When the route is hit, your browser should display the result of
                the math operation.
              </Typography>
              <Typography variant="body2" color="textSecondary" component="li">
                For example, when the user goes to the url
                http://localhost:3000/add/10/1, the page should display 11.
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
              href="https://github.com/UCF-Coding-Boot-Camp/UCF-VIRT-FSF-PT-11-2019-U-LOL/tree/master/Unit-14-handlebars/01-Activities/01-ExpressCalculator/Solved"
              target="_blank"
              id="solution"
            >
              View Solution
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
