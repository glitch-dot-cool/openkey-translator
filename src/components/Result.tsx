import { Result as ResultType } from "../types";
import { getColor } from "../utils";
import { Neighbor } from "./Neighbor";

interface Props {
  result?: ResultType;
}

export const Result = ({ result }: Props) => {
  if (!result) return <span className="bold large-text">{`\u200B`}</span>;

  const color = getColor({ key: result?.originalKey });
  const style = { color };

  return (
    <div className="result">
      <span
        className="bold large-text"
        style={style}
      >{`${result.originalKey} `}</span>
      <span className="bold large-text">= </span>
      <span
        className="bold large-text"
        style={style}
      >{`${result.result} `}</span>
      <p className="compatible-keys-header">compatible keys:</p>
      <Neighbor neighbor={result.neighbors.minusOne} />
      <Neighbor neighbor={result.neighbors.relative} />
      <Neighbor neighbor={result.neighbors.plusOne} />
    </div>
  );
};
