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

export type OpenKeyToMusicalResult = {
  originalKey: OpenKeyMappingKeys;
  result: InverseOpenKeyMappingKeys;
};

export type MusicalToOpenKeyResult = {
  originalKey: InverseOpenKeyMappingKeys;
  result: OpenKeyMappingKeys;
};

export type Result = OpenKeyToMusicalResult | MusicalToOpenKeyResult;
