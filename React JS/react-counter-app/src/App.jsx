import { useState } from "react";
import "./App.css";
import records from "./records.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div className="box-container">
        {records && records.map((record) => {
          return (
            <div className="box" key={record.id}>
              <p>{record.name}</p>
              <p>{record["mobile No"]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
