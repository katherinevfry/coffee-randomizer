import React, { useState } from 'react';
import { Button } from 'reactstrap';
import coffeePlaces from '../helpers/data/CoffeeData';

export default function App() {
  const [coffeeHouse, setCoffeeHouse] = useState();

  const getCoffee = () => {
    const randomCoffee = coffeePlaces[Math.floor(Math.random() * coffeePlaces.length)];
    setCoffeeHouse(randomCoffee);
  };

  return (
    <div className="coffeeSpot">
      <h1>i want coffee at...</h1>
      <div id="info">
        {
        coffeeHouse
        && <>
        <h2>{coffeeHouse.name.toUpperCase()}.</h2>
        <a href={coffeeHouse.url} className="nav-link">Learn More</a>
        </>
        }
      </div>
      <Button id="button" onClick={getCoffee}>GET COFFEE</Button>
    </div>
  );
}
