import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [calculator, setCalculator] = useState("");
  const [times, setTimes] = useState("");

  const addClick = (e) => {
    setCalculator(calculator.concat(e.target.value));
  };

  const clear = () => {
    setCalculator("");
  };

  const clearMinus = (e) => {
    setCalculator(calculator.slice(0, calculator.length - 1));
  };

  const calculate = () => {
    setCalculator(eval(calculator).toString());
  };

  function formatTime(elem) {
    if (elem < 10) {
      return "0";
    } else {
      return "";
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();

    setTimes(formatTime(h) + h + ":" + formatTime(m) + m);
  }

  return (
    <div className="container">
      <div>
        <div className="input">
          <div className="time">{times}</div>
          <div className="day">{new Date().toLocaleDateString()}</div>
        </div>

        <input type="text" className="inputCalculator" value={calculator} />
      </div>
      <div className="calculator">
        <button value="C" onClick={clearMinus} id="clear" className="equals">
          C
        </button>
        <button value="AC" onClick={clear} id="ac" className="equals">
          AC
        </button>
        <button value="/" onClick={addClick} className="equals">
          /
        </button>
        <button value="7" onClick={addClick}>
          7
        </button>
        <button value="8" onClick={addClick}>
          8
        </button>
        <button value="9" onClick={addClick}>
          9
        </button>
        <button value="*" onClick={addClick} className="equals">
          *
        </button>
        <button value="4" onClick={addClick}>
          4
        </button>
        <button value="5" onClick={addClick}>
          5
        </button>
        <button value="6" onClick={addClick}>
          6
        </button>
        <button value="-" onClick={addClick} className="equals">
          -
        </button>
        <button value="3" onClick={addClick}>
          3
        </button>
        <button value="2" onClick={addClick}>
          2
        </button>
        <button value="1" onClick={addClick}>
          1
        </button>
        <button value="+" onClick={addClick} className="equals">
          +
        </button>
        <button value="0" onClick={addClick}>
          0
        </button>
        <button value="." onClick={addClick} className="equals">
          .
        </button>
        <button value="=" onClick={calculate} id="equals">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
