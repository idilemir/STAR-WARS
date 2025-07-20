import React, { useState } from "react";
import StarshipList from "./components/StarshipList";
import StarshipDetail from "./components/StarshipDetail";

import "./App.css";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app-container">
      {selected ? (
        <StarshipDetail ship={selected} onBack={() => setSelected(null)} />
      ) : (
        <div>
          <h1 className="title">STAR WARS</h1>
          <StarshipList onSelect={setSelected} />
        </div>
      )}
    </div>
  );
}
