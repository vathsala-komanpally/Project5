import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const payments = [
    { name: 'Card type', detail: props.paymentDetails.cardtype },
    { name: 'Card holder', detail: props.paymentDetails.nameoncard },
    { name: 'Card number', detail: props.paymentDetails.cardnumber },
    { name: 'Expiry date', detail: props.paymentDetails.expdate },
  ];
  const [total, setTotal]=useState('');
let price=0;
useEffect(()=>{
  props.products.forEach((product)=>{
    price=product.Quantity*product.price+price;
  });
  setTotal(price);
},[total]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {props.products.map((product) => (
          <ListItem className={classes.listItem} key={product.itemname}>
            <ListItemText primary={`Product: ${product.itemname}`} secondary={`Quantity: ${product.Quantity}`} />
            <Typography variant="body2">{`Price: ${product.price}`}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
           {total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{props.customerDetails.firstname}{(', ')}{props.customerDetails.lastname}</Typography>
          <Typography gutterBottom>{props.customerDetails.address1} {(', ')}{props.customerDetails.address2} {(', ')}
          {props.customerDetails.city} {(', ')}{props.customerDetails.state} {(', ')}{props.customerDetails.zip} {(', ')}
          {props.customerDetails.country} {(', ')}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}