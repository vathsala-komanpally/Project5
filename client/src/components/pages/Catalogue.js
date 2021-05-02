import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContent:{
      paddingLeft: theme.spacing(34),
      paddingTop: theme.spacing(1),
    }
  }));

const Catalogue = () => {
  const classes = useStyles();
  return (
    <Jumbotron className={classes.mainContent}>
      <Container>
        <h1>Catalogue of this week:</h1>
        <p>New catalogue is comming soon<br />
    Every week, we will update a new catalogue.
    </p>

      </Container>
    </Jumbotron>
  );
}

export { Catalogue };