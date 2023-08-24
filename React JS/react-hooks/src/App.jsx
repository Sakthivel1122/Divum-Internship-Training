import { useEffect, useMemo } from "react";
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // useState is used when re-rendering is needed

  const countRef = useRef(0);
  const inputRef = useRef(null);
  // useRef is used when we want to Refer to a variable without re-rendering

  // useMemo
  const tenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000];
  const selected = useMemo(() => {
    return tenNum.find((n) => {
      console.log(n);
      return n === 1000;
    });
  }, []);
  console.log("Selected value:", selected);
  // useMemo

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOnClick = () => {
    setCount(count + 1); // Only triggered when it gets re-rendered
    countRef.current++; // Triggered on the spot of increment itself

    console.log("State: " + count);
    console.log("Ref: " + countRef.current);
  };
  return (
    <div className="App">
      <label>Search</label>
      <input type="text" placeholder="Type to search..." ref={inputRef} />
      <h1>Count: {count}</h1>
      <button onClick={handleOnClick}>Increment</button>
    </div>
  );
}

export default App;
