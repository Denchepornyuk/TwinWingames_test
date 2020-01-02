import React, { useState, useEffect } from 'react';
import './style.scss';

import Drums from './Components/Drums';
import Spin from './Components/Spin';

const App = () => {
  const imagesNumber = 13;
  const drumsNumber = 5;

  const [scroll, setScroll] = useState([]);
  const [randOrder, setRandOrder] = useState([]);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => (
    setScroll(() => (
      randNumbers(
        imagesNumber,
        imagesNumber / 2,
        imagesNumber * 2
      )
    ))), []);

  useEffect(() => (
    setRandOrder(randomOrder())
  ), []);

  const randomOrder = () => {
    const order = [];

    for (let i = 0; i < drumsNumber; i += 1) {
      const temp = [];

      while (temp.length !== imagesNumber) {
        const randNumber = Math.floor(1 + Math.random() * imagesNumber);

        if (!temp.includes(randNumber)) {
          temp.push(randNumber);
        }
      }

      order.push(temp);
    }

    return order;
  };

  const randNumbers = (count, min, max) => (
    Array(count).fill('').map(() => (
      Math.floor(min + Math.random() * (max + 1))
    ))
  );

  const handleStart = () => {
    setIsClicking(true);
    const buttons = document.querySelectorAll('.slider__button');

    setScroll(() => randNumbers(
      imagesNumber,
      imagesNumber / 2,
      imagesNumber * 2
    ));
    buttons.forEach(item => item.click());

    setTimeout(() => {
      setIsClicking(false);
    }, 5000);
  };

  return (
    <div className="App">

      <div className="carousels">
        {randOrder.map((drum, index) => (
          <Drums
            slidesPerScroll={scroll[index]}
            images={drum}
            speed={drumsNumber * 1000 - index * 1000}
          />
        ))}
      </div>

      {isClicking
        ? (
          <button
            type="button"
            className="button--clicking"
          >
            Spin
          </button>
        )
        : <Spin handleStart={handleStart} />
      }
    </div>
  );
};

export default App;
