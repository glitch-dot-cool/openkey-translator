import { useState } from "react";
import ReferenceImage from "../../public/openkey reference.jpeg";

export const Reference = () => {
  const [showReference, setShowReference] = useState(false);

  return (
    <>
      <button
        className="reference-button"
        onClick={() => setShowReference((prev) => !prev)}
      >
        toggle reference
      </button>

      {showReference && (
        <img className="reference-image" src={ReferenceImage} />
      )}
    </>
  );
};
