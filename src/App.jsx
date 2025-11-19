import StatefulComponent from "./components/StatefulComponent";
import StatelessComponent from "./components/StatelessComponent";

function App() {
  return (
    <div>
      <h1>React Components Example</h1>

      <StatefulComponent />

      <StatelessComponent message="Hello from Stateless Component!" />
    </div>
  );
}

export default App;
