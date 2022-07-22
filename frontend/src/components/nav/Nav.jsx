import React, { useState, useContext } from "react";
import "./nav.css";
// import "@pages/Home.css";
import Contact from "@components/Contact/Contact";
import Bulle from "@components/bulle/Bulle";
import Download from "@components/Download";
import Titre from "@components/Titre";
import CurrentPagesContext from "../../PagesContexts";
import PresDetail from "../presDetail/PresDetail";

export default function Nav() {
  const { pres } = useContext(CurrentPagesContext);
  const [openToogle, setOpenToogle] = useState(false);
  const [openPdfToogle, setOpenPdfToogle] = useState(false);
  const [openTabToogle, setOpenTabToogle] = useState(false);
  const handleToogleTableau = () => {
    return (
      setOpenTabToogle(!openTabToogle),
      openPdfToogle ? setOpenPdfToogle(!openPdfToogle) : null,
      openToogle ? setOpenToogle(!openToogle) : null
    );
  };

  const handleToogle = () => {
    return (
      setOpenToogle(!openToogle),
      openPdfToogle ? setOpenPdfToogle(!openPdfToogle) : null,
      openTabToogle ? setOpenTabToogle(!openTabToogle) : null
    );
  };
  const handleTooglepdf = () => {
    return (
      setOpenPdfToogle(!openPdfToogle),
      openTabToogle ? setOpenTabToogle(!openTabToogle) : null,
      openToogle ? setOpenToogle(!openToogle) : null
    );
  };
  return (
    <>
      {openToogle || openPdfToogle || openTabToogle ? null : <Titre />}
      {openToogle ? <Contact /> : null}
      {openPdfToogle ? <Download /> : null}
      {openTabToogle ? <Bulle pres={pres} /> : null}
      {openTabToogle ? <PresDetail pres={pres} /> : null}
      <ul className="gloNav">
        <li>
          <button className="buttonStyle3" type="button" onClick={handleToogle}>
            <p>Contact</p>
          </button>
        </li>
        <li>
          <button
            className="buttonStyle4"
            type="button"
            onClick={handleTooglepdf}
          >
            <p> CV Pdf </p>
          </button>
        </li>
        <li>
          <button
            className="buttonStyle4"
            type="button"
            onClick={handleToogleTableau}
          >
            <p> Présentation </p>
          </button>
        </li>
      </ul>
    </>
  );
}
