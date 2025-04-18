import React, { useState } from 'react';


const Matrix = () => {
  const [clicked, setClicked] = useState([]);
  const [colors, setColors] = useState(Array(9).fill(""));

  const handleClick = (index) => {
    if (clicked.includes(index)) return;

    const newClicked = [...clicked, index];
    const newColors = [...colors];
    newColors[index] = "bg-success"; // Bootstrap green
    setColors(newColors);
    setClicked(newClicked);

    if (index === 8) {
      newClicked.forEach((idx, i) => {
        setTimeout(() => {
          setColors(prev => {
            const temp = [...prev];
            temp[idx] = "bg-warning"; // Bootstrap orange-ish
            return temp;
          });
        }, i * 500);
      });
    }
  };

  const resetMatrix = () => {
    setClicked([]);
    setColors(Array(9).fill(""));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 ">
      <h1 className="mb-4 text-primary fw-bold">Matrix Game</h1>
      <div>

      </div>
      <div>
      <div 
        className="d-flex flex-wrap gap-4 justify-content-center p-3 border rounded shadow bg-white"
        style={{ width: "180px" }}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <button
            key={index}
            className={`btn ${colors[index]} border`}
            style={{ width: "50px", height: "50px" }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      <button 
        className="btn btn-danger mt-4 px-4"
        onClick={resetMatrix}
      >
        Reset
      </button>
      </div>
    </div>
  );
};

export default Matrix;
