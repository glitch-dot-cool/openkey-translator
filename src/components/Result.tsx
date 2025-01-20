import { Result as ResultType } from "../types";

interface Props {
  result?: ResultType;
}

export const Result = ({ result }: Props) => {
  if (!result) return null;

  return (
    <div>
      <span className="bold">{`${result.originalKey} `}</span>
      <span>{`in ${result.originalKeySystem} `}</span>
      <span>is equivalent to </span>
      <span className="bold">{`${result.result} `}</span>
      <span>{`in ${result.convertedKeySystem}`}</span>
    </div>
  );
};
