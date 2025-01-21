import { Result } from "../types";
import { getColor } from "../utils";

export const Neighbor = ({
  neighbor,
}: {
  neighbor: Result["neighbors"][keyof Result["neighbors"]];
}) => {
  const color = getColor({ key: neighbor.openKey });

  return (
    <p
      className="compatible-key"
      style={{ color }}
    >{`${neighbor.musicalKey} (${neighbor.openKey})`}</p>
  );
};
