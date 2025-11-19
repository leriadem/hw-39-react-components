import { useState } from "react";

export default function StatefulComponent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div style={{ border: "1px solid green", padding: "10px", margin: "10px" }}>
      <h2>Stateful Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
