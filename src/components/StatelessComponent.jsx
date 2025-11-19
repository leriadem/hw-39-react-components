export default function StatelessComponent({ message }) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h2>Stateless Component</h2>
      <p>{message}</p>
    </div>
  );
}
