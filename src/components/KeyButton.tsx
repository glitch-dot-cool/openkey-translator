import { inverseOpenkeyMap, openkeyMap } from "../consts";
import {
  KeysInOpenKeyOrMusical,
  MusicalToOpenKeyResult,
  OpenKeyToMusicalResult,
  Result,
} from "../types";

export interface KeyButtonProps {
  musicalKey: KeysInOpenKeyOrMusical;
  setResult: React.Dispatch<React.SetStateAction<Result | undefined>>;
}

const isOpenKey = (
  key: KeysInOpenKeyOrMusical
): key is keyof typeof openkeyMap => {
  return key in openkeyMap;
};

const getResult = (key: KeysInOpenKeyOrMusical): Result => {
  if (isOpenKey(key)) {
    const result: OpenKeyToMusicalResult = {
      originalKey: key,
      originalKeySystem: "openkey",
      result: openkeyMap[key],
      convertedKeySystem: "musical notation",
    };

    return result;
  }

  const result: MusicalToOpenKeyResult = {
    originalKey: key,
    originalKeySystem: "musical notation",
    result: inverseOpenkeyMap[key],
    convertedKeySystem: "openkey",
  };

  return result;
};

export const KeyButton = ({ musicalKey, setResult }: KeyButtonProps) => {
  return (
    <button onClick={() => setResult(getResult(musicalKey))}>
      {musicalKey}
    </button>
  );
};
