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

  const handleMinus = () => {
    //when user click, the value -1
    //when zero, stop
  };

  return (
    <>
      {/* html */}
      <div className="container">
        <img src="./src/assets/hero.jpg" alt="Hero" />
        <h1>PICANTE</h1>
      </div>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={handleClick}>+</button>
        <button onClick={handleMinus}>-</button>
      </div>
    </>
  );
}

export default Hero;
