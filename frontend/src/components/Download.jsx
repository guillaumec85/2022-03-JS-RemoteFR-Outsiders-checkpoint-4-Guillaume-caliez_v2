import React from "react";
// import "./Contact/Contact.css";

function Download() {
  return (
    <div className="gloDownload">
      <img className="cvpng" src="../src/assets/images/imageCV.jpg" alt="vv" />
      <a className="lienPdf" href="../src/assets/images/cv_Caliez.pdf">
        {" "}
        Télecharger mon CV
      </a>
    </div>
  );
}

export default Download;
