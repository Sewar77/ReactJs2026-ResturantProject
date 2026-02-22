import "./Hero.css";
import { useState } from "react";
function Hero() {
  //js code
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter) => counter + 1);
    if (counter === 10) {
      setCounter(0);
    }
  };
  //task solution
  const handleMinus = () => {
    setCounter((counter) => counter - 1);
    if (counter === 0) {
      setCounter(0);
    }
  };

  return (
    <>
      {/* html */}
      <div className="container">
        <img src="./src/assets/hero.jpg" alt="Hero" />
        <h1 className="title">PICANTE</h1>
      </div>
      {/* <div>
        <p>Counter: {counter}</p>
        <button onClick={handleClick}>+</button>
        <button onClick={handleMinus}>-</button>
      </div> */}
    </>
  );
}

export default Hero;
