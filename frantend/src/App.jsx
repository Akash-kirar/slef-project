import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hello");

  return (
    <main>
      <button onClick={() => setMessage("Button clicked!")}>Click me</button>
      <h2>{message}</h2>
    </main>
  );
}

export default App;
