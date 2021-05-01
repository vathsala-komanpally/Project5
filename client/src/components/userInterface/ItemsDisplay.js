import React, { useEffect, useState } from 'react';
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
    paddingLeft: theme.spacing(3),
    display: `flex`,
    justifyContent: `space-between`
  },
  itemTitle: {
    fontWeight: 800,
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
    width: "60%",
    backgroundColor: "rgb(210, 86, 86)",
  }
}));


//write other functon for button then export that to navbar
const ItemsDisplay = (props) => {
  const params = useParams();
  const [itemsList, setItemsList] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
  }, [params.id]);

  const handleAddToCartOnClick = (itemDetails) => {
    const repeated=props.cart.find(({itemname})=>itemname===itemDetails.itemname);
    const newCart= [...props.cart];
    if(repeated){
      const idxOfRepeated=props.cart.findIndex((repeated=>repeated.itemname === itemDetails.itemname));
      //props.cart[idxOfRepeated].Quantity= repeated.Quantity+1;
      newCart[idxOfRepeated].Quantity= repeated.Quantity+1;
      props.setCart(newCart);
    }else{
    itemDetails={...itemDetails, Quantity:1};
    props.setCart([...props.cart, itemDetails]);
    }
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" >
      <Typography variant="h4" className={classes.itemTitle}>
        ItemsList
      </Typography>
      <Grid container spacing={3} className={classes.itemsContainer}>
        {itemsList.map((itemDetails) => (
          <Grid item xs={3} key={itemDetails._id}>
            <Card className={classes.card}>
              <CardActionArea>
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
               <AddToCart handleClose={handleClose} open={open} cartItems={props.cart} setCartItems={props.setCart}/>
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
