import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Container from '@material-ui/core/Container';
import { CardMedia, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { AddToCart } from './AddToCart';

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(18),
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
    backgroundColor: "gray",
  }
}));


//write other functon for button then export that to navbar
const ItemsDisplay = (props) => {
  const params = useParams();
  const [itemsList, setItemsList] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [itemAddedToCart, setItemAddedToCart]=useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/api/groceryItems/category/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((response) => {
      return response.json();
    }).then((items) => {
      setItemsList(items);
    });
  }, []);



  const handleAddToCartOnClick = (itemDetails) => {
    props.setCart([...props.cart, itemDetails]);
    setItemAddedToCart([...props.cart, itemDetails]);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" className={classes.itemsContainer}>
      <Typography variant="h4" className={classes.itemTitle}>
        ItemsList
      </Typography>
      <Grid container spacing={3}>
        {itemsList.map((itemDetails) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea key={itemDetails._id}>
                <CardMedia className={classes.media}
                  image={itemDetails.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {itemDetails.itemname}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                    Price: ${itemDetails.price}.00
                  </Typography>
                  <Button className={classes.addToCart} endIcon={<ShoppingCart />} onClick={() => handleAddToCartOnClick(itemDetails)}>
                    Add to Cart
                  </Button>
               <AddToCart handleClose={handleClose} open={open} cartItems={itemAddedToCart}/>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export { ItemsDisplay };
