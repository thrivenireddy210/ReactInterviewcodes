import React, { useState } from "react";
import "./styles.css";

export default function GenerateCircle() {
  const [circleCount, setCircleCount] = useState(0);
  const [activeCircle, setActiveCircle] = useState(null);

  const addCircle = () => {
    setCircleCount(circleCount + 1);
  };

  const changeColor = (index) => {
    setActiveCircle(index);
  };

  return (
    <div className="App">
      <button onClick={addCircle}>Add Circle</button>
      {Array.from({ length: circleCount }, (_, index) => (
        <div key={index}>
          <svg height="100" width="100">
            <circle
              cx="50"
              cy="50"
              r="10"
              stroke="black"
              strokeWidth="3"
              fill={activeCircle === index ? "red" : "transparent"}
              onClick={() => changeColor(index)}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
