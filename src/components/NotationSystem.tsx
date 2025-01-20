import { Fragment } from "react/jsx-runtime";
import { inverseOpenkeyMap, openkeyMap } from "../consts";
import { KeysInOpenKeyOrMusical } from "../types";
import { KeyButton, KeyButtonProps } from "./KeyButton";

interface Props {
  setResult: KeyButtonProps["setResult"];
  notationSystem: "openkey" | "musical notation";
}

const getKeyMapping = (notationSystem: Props["notationSystem"]) => {
  return notationSystem === "openkey" ? openkeyMap : inverseOpenkeyMap;
};

export const NotationSystem = ({ setResult, notationSystem }: Props) => {
  const keys = Object.keys(
    getKeyMapping(notationSystem)
  ) as unknown as KeysInOpenKeyOrMusical[];

  return (
    <section className="notation-system">
      {keys.map((key) => (
        <Fragment key={key}>
          <KeyButton _key={key} setResult={setResult} />
        </Fragment>
      ))}
    </section>
  );
};
