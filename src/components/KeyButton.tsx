import { KeysInOpenKeyOrMusical, Result } from "../types";
import { getResult } from "../utils";

export interface KeyButtonProps {
  musicalKey: KeysInOpenKeyOrMusical;
  setResult: React.Dispatch<React.SetStateAction<Result | undefined>>;
}

export const KeyButton = ({ musicalKey, setResult }: KeyButtonProps) => {
  return (
    <button onClick={() => setResult(getResult(musicalKey))}>
      {musicalKey}
    </button>
  );
};
