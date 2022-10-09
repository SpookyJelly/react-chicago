import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Chicago } from "react-chicago";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <p>React-Chicago ShowCase</p>
        <Chicago text="Hello, World!" />
      </div>
    </div>
  );
}

export default App;
