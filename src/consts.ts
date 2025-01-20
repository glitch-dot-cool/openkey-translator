import { getColorForKey } from "./utils";

export const openkeyMap = {
  "1m": "A Minor",
  "1d": "C Major",
  "2m": "E Minor",
  "2d": "G Major",
  "3m": "B Minor",
  "3d": "D Major",
  "4m": "F-Sharp Minor",
  "4d": "A Major",
  "5m": "D-Flat Minor",
  "5d": "E Major",
  "6m": "A-Flat Minor",
  "6d": "B Major",
  "7m": "E-Flat Minor",
  "7d": "F-Sharp Major",
  "8m": "B-Flat Minor",
  "8d": "D-Flat Major",
  "9m": "F Minor",
  "9d": "A-Flat Major",
  "10m": "C Minor",
  "10d": "E-Flat Major",
  "11m": "G Minor",
  "11d": "B-Flat Major",
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
  "F-Sharp Minor": "4m",
  "A Major": "4d",
  "D-Flat Minor": "5m",
  "E Major": "5d",
  "A-Flat Minor": "6m",
  "B Major": "6d",
  "E-Flat Minor": "7m",
  "F-Sharp Major": "7d",
  "B-Flat Minor": "8m",
  "D-Flat Major": "8d",
  "F Minor": "9m",
  "A-Flat Major": "9d",
  "C Minor": "10m",
  "E-Flat Major": "10d",
  "G Minor": "11m",
  "B-Flat Major": "11d",
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
