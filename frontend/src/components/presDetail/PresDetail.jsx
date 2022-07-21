import React from "react";
import "../tableau/tableau.css";
// import CurrentPagesContext from "../../PagesContexts";

function PresDetail() {
  // { pres }
  // const { pres } = useContext(CurrentPagesContext);
  return (
    <div className="gloTableau">
      <div className="gloDetail">
        {/* <img
          className="imageTableau"
          src={`../src/assets/images/${pres.image}`}
          alt="cv"
        />

        {pres.description} */}
      </div>
    </div>
  );
}

export default PresDetail;
