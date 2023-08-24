import { useRef, useState } from "react";
import "./App.css";

function App() {
  const num1 = useRef();
  const num2 = useRef();
  const [result, setResult] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    let num = Number(num1.current.value) + Number(num2.current.value);
    if (num1.current.value === "" || num2.current.value === "" || isNaN(num)) {
      document.getElementById("result").className = "red-text";
      setResult("Error invalue input!!!");
      return;
    }
    if (num > Number.MAX_SAFE_INTEGER) {
      document.getElementById("result").className = "red-text";
      setResult("overflow");
    } else if (num < Number.MIN_SAFE_INTEGER) {
      document.getElementById("result").className = "red-text";
      setResult("underflow");
    } else {
      document.getElementById("result").className = "green-text";
      setResult(num);
    }
  };
  return (
    <div className="App">
      <h2>
        <span>Add two number</span>
      </h2>
      <form>
        <label>Enter number 1:</label>
        <input type="text" ref={num1} data-testid="num-1" id="num-1"/>
        <br />
        <label>Enter number 2:</label>
        <input type="text" ref={num2} data-testid="num-2" />
        <br />
        <input
          type="submit"
          value="Calculate"
          onClick={handleSubmit}
          data-testid="calculate"
        />
      </form>
      <br />
      <p>
        Result:{" "}
        <span id="result" data-testid="result" className="green-text">
          {result}
        </span>
      </p>
    </div>
  );
}

export default App;
