import React, { useContext } from "react";
import CurrentPagesContext from "../PagesContexts";

export default function Counter({ handlechange }) {
  const { count, setCount } = useContext(CurrentPagesContext);
  return (
    <div className="gloButton">
      <button
        className="buttonStyle"
        type="button"
        onChange={handlechange}
        onClick={count > 6 ? null : setCount(count + 1)}
      >
        <p>Lecture</p>
      </button>

      <button
        className="buttonStyle2"
        type="button"
        onChange={handlechange}
        onClick={count < 1 ? null : setCount(count - 1)}
      >
        <p>arrière </p>
      </button>
    </div>
  );
}
