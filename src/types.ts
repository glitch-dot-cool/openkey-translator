import { openkeyMap, inverseOpenkeyMap } from "./consts";

export type OpenKeyMappingKeys = keyof typeof openkeyMap;

export type OpenKeyMapping = {
  [key in OpenKeyMappingKeys]: (typeof openkeyMap)[key];
};

export type InverseOpenKeyMappingKeys = keyof typeof inverseOpenkeyMap;

export type InverseOpenKeyMapping = {
  [key in InverseOpenKeyMappingKeys]: (typeof inverseOpenkeyMap)[key];
};

export type KeysInOpenKeyOrMusical =
  | OpenKeyMappingKeys
  | InverseOpenKeyMappingKeys;

type OpenKeyNeighbors = {
  plusOne: OpenKeyMappingKeys;
  minusOne: OpenKeyMappingKeys;
  relative: OpenKeyMappingKeys;
};

type MusicalNeighbors = {
  plusOne: InverseOpenKeyMappingKeys;
  minusOne: InverseOpenKeyMappingKeys;
  relative: InverseOpenKeyMappingKeys;
};

export type OpenKeyToMusicalResult = {
  originalKey: OpenKeyMappingKeys;
  result: InverseOpenKeyMappingKeys;
  neighbors: OpenKeyNeighbors;
};

export type MusicalToOpenKeyResult = {
  originalKey: InverseOpenKeyMappingKeys;
  result: OpenKeyMappingKeys;
  neighbors: MusicalNeighbors;
};

export type Result = OpenKeyToMusicalResult | MusicalToOpenKeyResult;
