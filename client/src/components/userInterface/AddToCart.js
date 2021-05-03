import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DialogActions, makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Typography, Grid, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(
  {
    dialog: {
      position: 'absolute',
      right: 0,
      top: 10,
      width: "30%",
      alignItems: "center",
    },
    media: {
      height: 240,
      maxWidth: '100%',
      textAlign: "center"
    },
    button: {
      margin: 2,
      backgroundColor: "rgb(210, 86, 86)",
    }, quantityBtns: {
      width: "10%",
      backgroundColor: "gray",
    }
  }
);
const styles = (theme) => ({
  root: {
    position: 'relative',
    margin: 1,
    left: theme.spacing(3),
  },
  closeButton: {
    position: 'fixed',
    left: theme.spacing(148),
    top: theme.spacing(6),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Divider orientation="vertical" flexItem /> <CloseIcon /> <Divider orientation="vertical" flexItem />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const AddToCart = (props) => {
  const classes = useStyles();
  const [quantityOfItem, setQuantityOfItem] = useState(1);

  const handlePlus = (item) => {
    if (item.Quantity >= 0) {
      item.Quantity = item.Quantity + 1;
      setQuantityOfItem(item.Quantity);
    }
  }


  const handleMinus = (item) => {
    if (item.Quantity > 1) {
      item.Quantity = item.Quantity - 1;
      setQuantityOfItem(item.Quantity);
    }
  }

  const handleDelete = (item) => {
    const indxOfItemToDelete = props.cart.findIndex((itemToDelete => itemToDelete.itemname === item.itemname));
    props.cart.splice(indxOfItemToDelete, 1);
    props.setCart(props.cart);
  }


  return (
    <Dialog classes={{ paper: classes.dialog }} onClose={props.handleClose} open={props.open}>
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Items Added To Cart
      </DialogTitle>
      <DialogActions>
        <Grid container>
          <Grid item>
            {props.cart.map((item) => (
              <Card style={{ margin: 5 }} key={item._id}>
                <img src={item.image} alt={item.itemname} />
                <DialogContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.itemname} </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                    Price: ${item.price}.00 </Typography>
                </DialogContent>
                <Button className={classes.button} size="large">
                  <Button size="small" onClick={() => handlePlus(item)}> + </Button>
                  {item.Quantity}
                  <Button size="small" onClick={() => handleMinus(item)}> - </Button>
                </Button>
                <Button size="large" className={classes.button} endIcon={<DeleteIcon />} onClick={() => handleDelete(item)}>
                  Delete</Button>
              </Card>
            ))}
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export { AddToCart };