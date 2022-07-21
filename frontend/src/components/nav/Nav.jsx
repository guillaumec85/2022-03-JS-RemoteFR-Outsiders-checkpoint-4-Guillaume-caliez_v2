import React, { useState } from "react";
import "./nav.css";
import Contact from "@components/Contact/Contact";

export default function Nav() {
  const [openToogle, setOpenToogle] = useState(false);
  const handleToogle = () => {
    setOpenToogle(!openToogle);
  };
  return (
    <>
      {openToogle ? <Contact /> : null}

      <ul className="gloNav">
        <li>
          <button className="buttonStyle3" type="button" onClick={handleToogle}>
            <p>Contact</p>
          </button>
        </li>
        <li>
          <button className="buttonStyle4" type="button">
            <p> CV Pdf </p>
          </button>
        </li>
      </ul>
    </>
  );
}
