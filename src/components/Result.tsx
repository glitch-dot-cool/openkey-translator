import { Result as ResultType } from "../types";
import { useGetColor } from "../useGetColor";
import { Neighbor } from "./Neighbor";

interface Props {
  result?: ResultType;
}

export const Result = ({ result }: Props) => {
  const color = useGetColor({
    key: result?.originalKey,
    musicalKeyResult: result?.result,
  });

  if (!result) return <span className="bold large-text">{`\u200B`}</span>;

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
      <Neighbor neighbor={result.neighbors.plusOne} />
      <Neighbor neighbor={result.neighbors.relative} />
    </div>
  );
};
