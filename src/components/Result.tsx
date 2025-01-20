import { Result as ResultType } from "../types";

interface Props {
  result?: ResultType;
}

export const Result = ({ result }: Props) => {
  if (!result) return <span className="bold large-text">{`\u200B`}</span>;

  return (
    <div className="result">
      <span className="bold large-text">{`${result.originalKey} `}</span>
      <span className="bold large-text">= </span>
      <span className="bold large-text">{`${result.result} `}</span>
      <p>compatible keys:</p>
      <p>{`${result.neighbors.minusOne.musicalKey} (${result.neighbors.minusOne.openKey})`}</p>
      <p>{`${result.neighbors.plusOne.musicalKey} (${result.neighbors.plusOne.openKey})`}</p>
      <p>{`${result.neighbors.relative.musicalKey} (${result.neighbors.relative.openKey})`}</p>
    </div>
  );
};
