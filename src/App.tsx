import { useState } from "react";
import { Result as ResultType } from "./types";
import "./app.css";

import { NotationSystem } from "./components/NotationSystem";
import { Result } from "./components/Result";
import { Reference } from "./components/Reference";

function App() {
  const [result, setResult] = useState<ResultType>();
  const [showReference, setShowReference] = useState(false);

  return (
    <>
      <div className="main">
        <NotationSystem setResult={setResult} notationSystem="openkey" />
        <Result result={result} />
        <NotationSystem
          setResult={setResult}
          notationSystem="musical notation"
        />
        <button onClick={() => setShowReference((prev) => !prev)}>
          toggle reference
        </button>
      </div>
      {showReference && <Reference />}
    </>
  );
}

export default App;
