import { useState } from "react";
import "./App.css";

function App() {
  const items = [
    { id: 1, text: "item one", cost: "10" },
    { id: 2, text: "item two", cost: "5" },
    { id: 3, text: "item three", cost: "3.50" },
  ];
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li>
            {item.text} ${item.cost}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
