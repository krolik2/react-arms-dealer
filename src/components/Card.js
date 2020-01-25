import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    width: 300
  },
  cardActions: {
    justifyContent: "center"
  }
});

const CardItem = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image="https://i.ibb.co/qpMNZzG/M9-pistolet.jpg"
          title="Beretta M9"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Beretta M9
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            9mm
          </Typography>
          <Typography variant="h6" component="h2">
            $500
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button variant="contained" size="medium" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
