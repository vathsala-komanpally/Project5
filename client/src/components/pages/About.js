import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image2 from '../images/Image2.jpeg';
import Image3 from '../images/image6.jpeg';

const About = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <h2>Welcome to Grocery Market</h2>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2} style={{ height: 500 }}
            alt="First slide"
          />
          <Carousel.Caption style={{ color: "brown" }}>
            <h2>About:</h2>
            <p>We’re dedicated to finding ways to help our customer’s money go further. That’s why we offer
            affordable prices every day on a wide range of products, as well as weekly Specials, Prices Dropped
            and Low Price Always, to help you get your money’s worth when you shop with us.
        Every week, you'll find hundreds of new specials..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3} style={{ height: 500 }}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Shop Online</h3>
            <p>Saves time and efforts. Shop from home, Wide variety products are available.
           Get detailed information of the product online.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export { About };