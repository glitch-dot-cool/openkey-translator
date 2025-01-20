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
  plusOne: {
    openKey: OpenKeyMappingKeys;
    musicalKey: InverseOpenKeyMappingKeys;
  };
  minusOne: {
    openKey: OpenKeyMappingKeys;
    musicalKey: InverseOpenKeyMappingKeys;
  };
  relative: {
    openKey: OpenKeyMappingKeys;
    musicalKey: InverseOpenKeyMappingKeys;
  };
};

type MusicalNeighbors = {
  plusOne: {
    openKey: OpenKeyMappingKeys;
    musicalKey: InverseOpenKeyMappingKeys;
  };
  minusOne: {
    openKey: OpenKeyMappingKeys;
    musicalKey: InverseOpenKeyMappingKeys;
  };
  relative: {
    openKey: OpenKeyMappingKeys;
    musicalKey: InverseOpenKeyMappingKeys;
  };
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
