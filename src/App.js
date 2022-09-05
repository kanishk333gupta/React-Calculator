import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Error - Wrong input");
    }
  };
  return (
    <div class="center">
      <div class="container">
        <div class="screen">
          <form>
            <input type="text" value={result} />
          </form>
        </div>
        <div class="keyPad">
          <button onClick={clear} class="ac-btn light-gray">
            AC
          </button>
          <button name="%" onClick={handleClick} class="orange">
            %
          </button>
          <button name="/" onClick={handleClick} class="orange">
            /
          </button>
          <button name="7" onClick={handleClick} class="light-gray">
            7
          </button>
          <button name="8" onClick={handleClick} class="light-gray">
            8
          </button>
          <button name="9" onClick={handleClick} class="light-gray">
            9
          </button>
          <button name="*" onClick={handleClick} class="orange">
            &times;
          </button>
          <button name="4" onClick={handleClick} class="light-gray">
            4
          </button>
          <button name="5" onClick={handleClick} class="light-gray">
            5
          </button>
          <button name="6" onClick={handleClick} class="light-gray">
            6
          </button>
          <button name="-" onClick={handleClick} class="orange">
            &ndash;
          </button>
          <button name="3" onClick={handleClick} class="light-gray">
            3
          </button>
          <button name="2" onClick={handleClick} class="light-gray">
            2
          </button>
          <button name="1" onClick={handleClick} class="light-gray">
            1
          </button>
          <button name="+" onClick={handleClick} class="orange">
            +
          </button>
          <button name="0" onClick={handleClick} class="light-gray">
            0
          </button>
          <button name="." onClick={handleClick} class="light-gray">
            .
          </button>
          <button onClick={calculate} class="equal-btn">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
