import React from "react";

export default function Counter({ handleclick, handleclick2 }) {
  return (
    <>
      <button className="buttonStyle" type="button" onClick={handleclick}>
        <p>Lecture</p>
      </button>

      <button className="buttonStyle2" type="button" onClick={handleclick2}>
        <p>arrière </p>
      </button>
    </>
  );
}
