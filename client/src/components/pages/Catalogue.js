import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import Catalogue4 from '../images/catalogue4.jpg';
import Catalogue5 from '../images/catalogue5.jpg';
import Catalogue6 from '../images/catalogue6.jpg';
import Catalogue7 from '../images/catalogue7.jpg';

const Catalogue = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
      <Container>
        <h1>Catalogue of this week:</h1>
        <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item><img className="d-block w-100" src={Catalogue5} style={{ height: 500 }} alt="First slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-100" src={Catalogue6} style={{ height: 500 }} alt="Second slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-100" src={Catalogue7} style={{ height: 500 }} alt="Third slide"/></Carousel.Item>
        <Carousel.Item><img className="d-block w-100" src={Catalogue4} style={{ height: 500 }} alt="Fourth slide"/></Carousel.Item>
      </Carousel>
      </Container>
  );
}

export { Catalogue };