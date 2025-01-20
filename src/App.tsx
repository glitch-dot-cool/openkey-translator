import { useState } from "react";
import { OpenKeyMappingKeys, Result } from "./types";
import { openkeyMap } from "./consts";
import { KeyButton, KeyButtonProps } from "./components/KeyButton";

const OpenKey = ({ setResult }: { setResult: KeyButtonProps["setResult"] }) => {
  const keys = Object.keys(openkeyMap) as unknown as OpenKeyMappingKeys[];

  return (
    <>
      {keys.map((key) => (
        <KeyButton key={key} musicalKey={key} setResult={setResult} />
      ))}
    </>
  );
};

const formatResult = (result?: Result) => {
  if (!result) return;
  return `${result.originalKey} in ${result.originalKeySystem} is equivalent to ${result.result} in ${result.convertedKeySystem}`;
};

function App() {
  const [result, setResult] = useState<Result>();

  return (
    <>
      <OpenKey setResult={setResult} />
      <p>{formatResult(result)}</p>
    </>
  );
}

export default App;
