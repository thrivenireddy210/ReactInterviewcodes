import React, { useState, useEffect } from 'react';
import './SquareGrid.css';

const SquareGrid = () => {
  const [squares, setSquares] = useState(Array(60).fill('black'));
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log('currentIndex',currentIndex)

  useEffect(() => {
    const interval = setInterval(() => {
      setSquares((prevSquares) => {
        const updatedSquares = [...prevSquares];
        updatedSquares[currentIndex] = 'white';

        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex == updatedSquares.length) {
            // All squares have completed, reset to black
            setTimeout(() => {
              setSquares(Array(60).fill('black'));
              setCurrentIndex(0);
            }, 1000);
          }
          return nextIndex;
        });

        return updatedSquares;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="square-grid">
      {squares.map((square, index) => (
        <div key={index} className={`square ${square}`}></div>
      ))}
    </div>
  );
};

export default SquareGrid;




