import { inverseOpenkeyMap, openkeyMap } from "./consts";
import {
  KeysInOpenKeyOrMusical,
  MusicalToOpenKeyResult,
  OpenKeyMappingKeys,
  OpenKeyToMusicalResult,
  Result,
} from "./types";

const getOpenKeyNeighbors = (key: OpenKeyMappingKeys) => {
  const keyNumber = parseInt(key.slice(0, -1));
  const keyType = key.slice(-1);

  const plusOne = `${(keyNumber % 12) + 1}${keyType}` as OpenKeyMappingKeys;

  const minusOne = `${
    keyNumber - 1 === 0 ? 12 : keyNumber - 1
  }${keyType}` as OpenKeyMappingKeys;

  const relative =
    keyType === "m"
      ? (`${keyNumber}d` as OpenKeyMappingKeys)
      : (`${keyNumber}m` as OpenKeyMappingKeys);

  return { plusOne, minusOne, relative };
};

const isOpenKey = (
  key: KeysInOpenKeyOrMusical
): key is keyof typeof openkeyMap => {
  return key in openkeyMap;
};

export const getResult = (key: KeysInOpenKeyOrMusical): Result => {
  if (isOpenKey(key)) {
    const result: OpenKeyToMusicalResult = {
      originalKey: key,
      result: openkeyMap[key],
      neighbors: getOpenKeyNeighbors(key),
    };

    return result;
  }

  const partialResult: Pick<MusicalToOpenKeyResult, "originalKey" | "result"> =
    {
      originalKey: key,
      result: inverseOpenkeyMap[key],
    };

  const openKeyNeighbors = getOpenKeyNeighbors(partialResult.result);

  const result: MusicalToOpenKeyResult = {
    ...partialResult,
    neighbors: {
      plusOne: openkeyMap[openKeyNeighbors.plusOne],
      minusOne: openkeyMap[openKeyNeighbors.minusOne],
      relative: openkeyMap[openKeyNeighbors.relative],
    },
  };

  return result;
};
