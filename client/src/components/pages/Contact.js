import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
const Contact = () => {
  return (
    <Jumbotron>
      <Container>
        <h1>Contact Us:</h1>
        <p>Adress: <br />
    Drive, Ocean Reef, WA 6027<br />
        Call (03) 9311 1200<br />
        grocerystore@lucky.net.au<br /><br />
        Opening hours: <br />
        Monday to Friday 7am to 6pm<br /> 
        Saturday 10am to 4:30pm
        Sunday 11am to 4pm
        </p>
        </Container>
        </Jumbotron>

  );
}

export {Contact};