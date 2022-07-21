import React, { useRef, useState } from "react";
import api from "@services/api";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState({
    nom: "",
    mail: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wjnzgp1",
        "template_mdjs6cm",
        form.current,
        "WAA7jV3ztwpLBxNpS"
      )

      .then(
        (result) => {
          console.warn(result.text);
          api.post(`api/message`, message).then((res) => setMessage(res.data));
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="gloContact">
      <div id="contactContainer">
        <img
          className="imageTableau"
          src="../src/assets/images/cg.png"
          alt="logo"
        />
        <form
          action="/api/route/contact"
          method="post"
          onSubmit={sendEmail}
          ref={form}
        >
          <h1>Envoyé moi un message !</h1>
          <input type="text" name="name" placeholder="Nom et prénom" required />

          <input
            type="email"
            name="email"
            placeholder="adresse mail"
            required
          />

          <textarea
            type="message"
            row="12"
            name="message"
            placeholder="Votre message"
            required
          />

          <button className="buttonStyleContact" type="submit">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
