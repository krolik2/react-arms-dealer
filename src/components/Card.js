import React from "react";
import { Card, CardMedia, CardActionArea, CardActions, CardContent, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      width: 300,
    },
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
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Beretta M9
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
