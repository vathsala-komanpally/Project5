import React from 'react';
import home from '../images/homepagepic.png';
import motherday from '../images/mothersDayImage.jpeg';
import clickcollect from '../images/clickCollectImage.jpeg';
import weeklySpecials from '../images/weeklySpecials.png';
import CardDeck from 'react-bootstrap/CardDeck';
import Figure from 'react-bootstrap/Figure';
import { HomePageImage } from './HomePageImage';

const HomePage = () => {
  return (
    <div>
      <Figure>
        <Figure.Image height='10' width='3000'
          src={home} />
        <Figure.Caption>
          Welcome to Grocery Market </Figure.Caption>
        </Figure>

      <CardDeck>
        <HomePageImage header={"Click and Collect"} text={"Looking for a faster way to shop? collect your groceries faster here you go!"} image={clickcollect} />
        <HomePageImage header={"Shop Mother's Day Gifts Online"} text={"Looking for the perfect Mother's Day gift?You are at the right place"} image={motherday} />
        <HomePageImage header={"Weekly Specials"} text={"Click here for our weekly specilas great prices online and instore on the everyday products you want"} image={weeklySpecials}/>
      </CardDeck>
    </div>
  )
}

export { HomePage };
