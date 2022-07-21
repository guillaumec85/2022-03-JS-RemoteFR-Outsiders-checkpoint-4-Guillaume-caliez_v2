import React from "react";
import "../tableau/tableau.css";
// import CurrentPagesContext from "../../PagesContexts";

function PresDetail({ pres }) {
  return (
    <div className="gloTableau">
      <div className="gloDetail">
        {pres.image === undefined ? (
          <img
            className="imageTableau"
            src="../src/assets/images/cg.png"
            alt={`${pres.image}`}
          />
        ) : (
          <img
            className="imageTableau"
            src={`../src/assets/images/${pres.image}`}
            alt={`${pres.image}`}
          />
        )}
        {pres.description === undefined ? " " : <p>{pres.description}</p>}
      </div>
    </div>
  );
}

export default PresDetail;
