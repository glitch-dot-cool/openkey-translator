import { memo } from "react";
import { KeysInOpenKeyOrMusical, Result } from "../types";
import { getColor, getResult } from "../utils";

export interface KeyButtonProps {
  _key: KeysInOpenKeyOrMusical;
  setResult: React.Dispatch<React.SetStateAction<Result | undefined>>;
}

export const KeyButton = memo(({ _key, setResult }: KeyButtonProps) => {
  const result = getResult(_key);
  const color = getColor({ key: _key });

  return (
    <button onClick={() => setResult(result)} style={{ color }}>
      {_key}
    </button>
  );
});
