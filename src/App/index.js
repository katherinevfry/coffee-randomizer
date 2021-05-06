import React, { useState } from 'react';
import coffeePlaces from '../helpers/data/CoffeeData';

export default function App() {
  const [coffeeHouse, setCoffeeHouse] = useState();

  const getCoffee = () => {
    const randomCoffee = coffeePlaces[Math.floor(Math.random() * coffeePlaces.length)];
    setCoffeeHouse(randomCoffee.name);
  };

  return (
    <div className="coffeeSpot">
      {coffeeHouse ? <h1>{coffeeHouse}</h1> : <h1>Lets Get Coffee</h1>}
      <button onClick={getCoffee}>Get Coffee</button>
    </div>
  );
}
