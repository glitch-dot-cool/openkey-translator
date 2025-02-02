import { useState } from "react";
import { Result as ResultType } from "./types";
import "./app.css";

import { NotationSystem } from "./components/NotationSystem";
import { Result } from "./components/Result";
import { Reference } from "./components/Reference";

function App() {
  const [result, setResult] = useState<ResultType>();

  return (
    <div className="main">
      <NotationSystem setResult={setResult} notationSystem="openkey" />
      <Result result={result} />
      <NotationSystem setResult={setResult} notationSystem="musical notation" />
      <Reference />
    </div>
  );
}

export default App;
