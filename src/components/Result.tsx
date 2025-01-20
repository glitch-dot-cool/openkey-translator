import { Result as ResultType } from "../types";

interface Props {
  result?: ResultType;
}

export const Result = ({ result }: Props) => {
  if (!result) return null;

  return (
    <div className="result">
      <span className="bold large-text">{`${result.originalKey} `}</span>
      <span className="bold large-text">= </span>
      <span className="bold large-text">{`${result.result} `}</span>
    </div>
  );
};
