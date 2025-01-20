import { keyColors } from "./consts";
import { KeysInOpenKeyOrMusical, Result } from "./types";
import { isOpenKey } from "./utils";

interface UseGetColorParams {
  key?: KeysInOpenKeyOrMusical;
  musicalKeyResult?: Result["result"];
}

export const useGetColor = ({ key, musicalKeyResult }: UseGetColorParams) => {
  if (!key || !musicalKeyResult) return "";

  const _isOpenKey = isOpenKey(key);

  const color = _isOpenKey ? keyColors[key] : keyColors[musicalKeyResult];

  return color;
};
