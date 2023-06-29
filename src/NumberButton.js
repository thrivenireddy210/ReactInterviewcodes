// import React, { useState } from 'react'

// const NumberButton = () => {
//     const [count,setCount]=useState(3);
//     const[color,setColor]=useState('')
//     const countHandler=()=>{
//         const randomNum=Math.floor(Math.random()*256);
//         const randomcolor=`rgb(${randomNum},${randomNum},${randomNum})`
//         setCount(count+3) 
//         console.log("randomcolor",randomcolor)
//         setColor(randomcolor) 
//     }
//   return (
//     <div style={{background:color}}>
//            <button onClick={countHandler} >  {count}</button>

//     </div>
//   )
// }

// export default NumberButton


import React, { useState } from 'react';

const NumberButton = () => {
  const [number, setNumber] = useState(0);
  const [buttonColor, setButtonColor] = useState('');

//   const generateRandomColor = () => {
//     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     setButtonColor(randomColor);
//   };

  const handleButtonClick = () => {
    setNumber(number + 3);
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setButtonColor(randomColor);
    // generateRandomColor();
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={handleButtonClick}
      >
        {number}
      </button>
    </div>
  );
};

export default NumberButton;
