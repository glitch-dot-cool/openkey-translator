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

export const isOpenKey = (
  key: KeysInOpenKeyOrMusical
): key is keyof typeof openkeyMap => {
  return key in openkeyMap;
};

export const getResult = (key: KeysInOpenKeyOrMusical): Result => {
  if (isOpenKey(key)) {
    const partialResult: Pick<
      OpenKeyToMusicalResult,
      "originalKey" | "result"
    > = {
      originalKey: key,
      result: openkeyMap[key],
    };

    const neighbors = getOpenKeyNeighbors(key);

    const result: OpenKeyToMusicalResult = {
      ...partialResult,
      neighbors: {
        plusOne: {
          openKey: neighbors.plusOne,
          musicalKey: openkeyMap[neighbors.plusOne],
        },
        minusOne: {
          openKey: neighbors.minusOne,
          musicalKey: openkeyMap[neighbors.minusOne],
        },
        relative: {
          openKey: neighbors.relative,
          musicalKey: openkeyMap[neighbors.relative],
        },
      },
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
      plusOne: {
        openKey: openKeyNeighbors.plusOne,
        musicalKey: openkeyMap[openKeyNeighbors.plusOne],
      },
      minusOne: {
        openKey: openKeyNeighbors.minusOne,
        musicalKey: openkeyMap[openKeyNeighbors.minusOne],
      },
      relative: {
        openKey: openKeyNeighbors.relative,
        musicalKey: openkeyMap[openKeyNeighbors.relative],
      },
    },
  };

  return result;
};

export function getColorForKey(index: number, totalKeys: number): string {
  const offset = -20;
  const hue = ((index / totalKeys) * 360 + offset) % 360;
  return `hsl(${hue}, 80%, 70%)`;
}
