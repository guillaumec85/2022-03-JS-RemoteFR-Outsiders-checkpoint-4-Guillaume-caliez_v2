import React from "react";
import "../tableau/tableau.css";
// import CurrentPagesContext from "../../PagesContexts";

function Bulle({ pres }) {
  return (
    <div className="gloBulle">
      <p>{pres.discours}</p>
    </div>
  );
}

export default Bulle;
