import { useState } from "react";
import { Result } from "./types";
import "./app.css";

import { NotationSystem } from "./components/NotationSystem";

const formatResult = (result?: Result) => {
  if (!result) return;
  return `${result.originalKey} in ${result.originalKeySystem} is equivalent to ${result.result} in ${result.convertedKeySystem}`;
};

function App() {
  const [result, setResult] = useState<Result>();

  return (
    <div className="main">
      <NotationSystem setResult={setResult} notationSystem="openkey" />
      <p>{formatResult(result)}</p>
      <NotationSystem setResult={setResult} notationSystem="musical notation" />
    </div>
  );
}

export default App;
