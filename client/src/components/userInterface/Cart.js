import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CardMedia, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(30),
  },
  itemTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: '100%',
    textAlign: "center"
  },
  media: {
    height: 240
  },
  addToCart: {
    borderRadius: 30,
    width: "50%",
    backgroundColor: "rgb(210, 86, 86)",
  }
}));

const Cart = (props) => {
  const classes = useStyles();
  const [quantityOfItem, setQuantityOfItem] = useState(1);
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  const handlePlus = (cartItem) => {
    if (cartItem.Quantity >= 0) {
      cartItem.Quantity = cartItem.Quantity + 1;
      setQuantityOfItem(cartItem.Quantity);
    }
  }

  const handleDelete = (cartItem) => {
    const indxOfItemToDelete = props.cart.findIndex((itemToDelete => itemToDelete.itemname === cartItem.itemname));
    props.cart.splice(indxOfItemToDelete, 1);
    setOpen(false);
  }

  const handleMinus = (cartItem) => {
    if (cartItem.Quantity > 1) {
      cartItem.Quantity = cartItem.Quantity - 1;
      setQuantityOfItem(cartItem.Quantity);
    }
  }

  const handleCheckOutClick = () => {
    history.replace("/");
  }

  return (
      <Container maxWidth="lg" className={classes.itemsContainer}>
        <Typography variant="h4" className={classes.itemTitle}>
          Items added to the cart:
      </Typography>
        <Grid container spacing={3}>
          {props.cart.map((itemDetails) => (
            <Grid item xs={12} sm={6} md={4} key={itemDetails._id}>
              <IconButton aria-label="close" onClick={() => handleDelete(itemDetails)}>
                <Divider orientation="vertical" flexItem /> <CloseIcon /> <Divider orientation="vertical" flexItem />
              </IconButton>
              <Card className={classes.card}>
                <CardActionArea >
                  <CardMedia className={classes.media}
                    image={itemDetails.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {itemDetails.itemname}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                      Price: ${itemDetails.price}.00<br />
                    Quantity:{itemDetails.Quantity}
                    </Typography>
                    <Button className={classes.addToCart} size="large">

                      <Button size="small" onClick={() => handlePlus(itemDetails)}> + </Button>
                      {itemDetails.Quantity}
                      <Button size="small" onClick={() => handleMinus(itemDetails)}> - </Button>
                    </Button>

                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
          <Link to="/cart/checkout">
            <Button size="large" style={{ paddingLeft: 50 }} onClick={handleCheckOutClick}>
              CheckOut</Button>
          </Link>
        </Grid>
      </Container>
  )
}

export { Cart };
