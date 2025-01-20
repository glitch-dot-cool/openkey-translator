import { Result } from "../types";
import { useGetColor } from "../useGetColor";

export const Neighbor = ({
  neighbor,
}: {
  neighbor: Result["neighbors"][keyof Result["neighbors"]];
}) => {
  const color = useGetColor({
    key: neighbor.openKey,
    musicalKeyResult: neighbor.musicalKey,
  });

  return (
    <p
      className="compatible-key"
      style={{ color }}
    >{`${neighbor.musicalKey} (${neighbor.openKey})`}</p>
  );
};
