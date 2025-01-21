import { useMemo } from "react";
import { KeysInOpenKeyOrMusical, Result } from "../types";
import { getColor, getResult } from "../utils";

export interface KeyButtonProps {
  _key: KeysInOpenKeyOrMusical;
  setResult: React.Dispatch<React.SetStateAction<Result | undefined>>;
}

export const KeyButton = ({ _key, setResult }: KeyButtonProps) => {
  const result = useMemo(() => getResult(_key), [_key]);
  const color = useMemo(() => getColor({ key: _key }), [_key]);

  return (
    <button onClick={() => setResult(result)} style={{ color }}>
      {_key}
    </button>
  );
};
