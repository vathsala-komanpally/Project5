import React, {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'
import Image2 from '../images/image2.png';
import Image1 from '../images/image2.jpeg';
import Image3 from '../images/image6.jpeg';
//import {ItemsDisplay} from "../userInterface/ItemsDisplay";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}  style={{ height: 500 }} 
          alt="First slide"
        />
        <Carousel.Caption >
          <h2>Home:</h2>
          <p>We’re dedicated to finding ways to help our customer’s money go further. That’s why we offer
        affordable prices every day on a wide range of products, as well as weekly Specials, Prices Dropped
        and Low Price Always, to help you get your money’s worth when you shop with us.
        Every week, you'll find hundreds of new specials..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}  style={{height: 500 }} 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Shop Online</h3>
          <p>Saves time and efforts. Shop from home, Wide variety products are available.
           Get detailed information of the product online.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}  style={{ height: 500 }} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Don't miss big sale</h3>
          <p>   Good discounts and lower prices.
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
      <h2>Welcome to Grocery Market</h2>
  </div>
    
  )
}

export { Home };
