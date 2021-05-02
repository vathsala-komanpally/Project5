import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContent:{
      paddingLeft: theme.spacing(34),
      paddingTop: theme.spacing(1),
    }
  }));

const About = () => {
  const classes = useStyles();
  return (
    <Jumbotron
      className={classes.mainContent}>
      <Container>
        <h1>About:</h1>
        <p>We’re dedicated to finding ways to help our customer’s money go further. 
          That’s why we offer affordable prices every day on a wide range of products, 
          as well as weekly Specials, Prices Dropped
        and Low Price Always, to help you get your money’s worth when you shop with us.
      Every week, you'll find hundreds of new specials.</p>
      </Container>
    </Jumbotron>

  )
}

export { About };