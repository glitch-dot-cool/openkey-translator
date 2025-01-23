import { getColorForKey } from "./utils";

export const openkeyMap = {
  "1m": "A Minor",
  "1d": "C Major",
  "2m": "E Minor",
  "2d": "G Major",
  "3m": "B Minor",
  "3d": "D Major",
  "4m": "F♯ Minor",
  "4d": "A Major",
  "5m": "D♭ Minor",
  "5d": "E Major",
  "6m": "A♭ Minor",
  "6d": "B Major",
  "7m": "E♭ Minor",
  "7d": "F♯ Major",
  "8m": "B♭ Minor",
  "8d": "D♭ Major",
  "9m": "F Minor",
  "9d": "A♭ Major",
  "10m": "C Minor",
  "10d": "E♭ Major",
  "11m": "G Minor",
  "11d": "B♭ Major",
  "12m": "D Minor",
  "12d": "F Major",
} as const;

export const inverseOpenkeyMap = {
  "A Minor": "1m",
  "C Major": "1d",
  "E Minor": "2m",
  "G Major": "2d",
  "B Minor": "3m",
  "D Major": "3d",
  "F♯ Minor": "4m",
  "A Major": "4d",
  "D♭ Minor": "5m",
  "E Major": "5d",
  "A♭ Minor": "6m",
  "B Major": "6d",
  "E♭ Minor": "7m",
  "F♯ Major": "7d",
  "B♭ Minor": "8m",
  "D♭ Major": "8d",
  "F Minor": "9m",
  "A♭ Major": "9d",
  "C Minor": "10m",
  "E♭ Major": "10d",
  "G Minor": "11m",
  "B♭ Major": "11d",
  "D Minor": "12m",
  "F Major": "12d",
} as const;

export const keyColors = Object.keys(openkeyMap).reduce<Record<string, string>>(
  (acc, key, index, array) => {
    acc[key] = getColorForKey(index, array.length);
    return acc;
  },
  {}
);
