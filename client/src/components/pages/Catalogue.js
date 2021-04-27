import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
const Catalogue = () => {
  return (
    <Jumbotron>
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