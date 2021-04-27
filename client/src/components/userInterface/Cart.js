import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CardMedia, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

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
    addToCart:{
      borderRadius: 30,
      width: "50%",
      backgroundColor: "gray",
    }
  }));

const Cart = (props) => {
    const classes= useStyles();

    const handlePlus=(cartItem)=>{
        //cartItem
       // setCart([...cart,cartItem]);
    }

    const handleDelete=(cartItem)=>{
        
    }
    
    const handleMinus=(cartItem)=>{
        
    }
    return (
    <Container maxWidth="lg" className={classes.itemsContainer}>
      <Typography variant="h4" className={classes.itemTitle}>
      Items added to the cart:
      </Typography>
      <Grid container spacing={3}>
      {props.cart.map((itemDetails) => ( 
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
                    Quantity:{itemDetails.noOfItems}
                  </Typography>
                  <Button className={classes.addToCart}>
                  <Button onClick={()=>{handlePlus(itemDetails)}}>+</Button>
                  <Button onClick={()=>{handleDelete(itemDetails)}}>Delete</Button>
                  <Button onClick={()=>{handleMinus(itemDetails)}}>-</Button>
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    )
}

export { Cart };
