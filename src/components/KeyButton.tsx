import { KeysInOpenKeyOrMusical, Result } from "../types";
import { useGetColor } from "../useGetColor";
import { getResult } from "../utils";

export interface KeyButtonProps {
  _key: KeysInOpenKeyOrMusical;
  setResult: React.Dispatch<React.SetStateAction<Result | undefined>>;
}

export const KeyButton = ({ _key, setResult }: KeyButtonProps) => {
  const result = getResult(_key);
  const color = useGetColor({
    key: _key,
    musicalKeyResult: result.result,
  });

  return (
    <button onClick={() => setResult(result)} style={{ color }}>
      {_key}
    </button>
  );
};
