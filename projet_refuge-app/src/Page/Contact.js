import React, { useState, useEffect } from "react";
import "../Contact.css";
import emailjs from "emailjs-com";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
  const [popupEnvoieVisible, setPopupEnvoieVisible] = useState(false);
  const [popupEnvoieClass, setPopupEnvoieClass] = useState("");

  const [formData, setFormData] = useState({
    name1: "",
    email1: "",
    telephone1: "",
    message1: "",
  });

  useEffect(() => {
    const inputs = document.querySelectorAll(
      ".input-container input, .input-container textarea"
    );

    const handleFocus = (event) => event.target.classList.add("focused");
    const handleBlur = (event) => {
      if (!event.target.value) event.target.classList.remove("focused");
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name1, email1, telephone1, message1 } = formData;

    emailjs
      .send(
        "service_5q958pf",
        "template_0wcw1wp",
        { name1, email1, telephone1, message1 },
        "GprZAo7Xbj4DQXKdY"
      )
      .then(
        () => {
          setPopupEnvoieClass("popupenvoie-success");
          setPopupEnvoieVisible(true);
          setFormData({
            name1: "",
            email1: "",
            telephone1: "",
            message1: "",
          });
        },
        () => {
          setPopupEnvoieClass("popupenvoie-erreur");
          setPopupEnvoieVisible(true);
        }
      );
  };

  return (
    <div className="container_page_contact">
      {popupEnvoieVisible && (
        <div className={`popupenvoie ${popupEnvoieClass}`}>
          <div className="popupenvoie__content">
            <img
              src="/img/vert_pop.png"
              alt="Image florale"
              className="popupenvoie__image"
            />
            <h2 className="popupenvoie__title">MERCI</h2>
            <p className="popupenvoie__description">
              {popupEnvoieClass === "popupenvoie-success"
                ? "Nous avons bien reçu votre demande de devis et vous remercions pour votre intérêt. Notre équipe vous recontactera sous peu avec une proposition adaptée à vos besoins."
                : "Erreur lors de l'envoi du message. Veuillez réessayer."}
            </p>
            <div className="popupenvoie__buttons">
              <button
                onClick={() => (window.location.href = "/")}
                className="popupenvoie__button retour"
              >
                Retour au menu
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="img_contact">
        <img
          src={process.env.PUBLIC_URL + "/img/chien contact.jpeg"}
          alt="Chien contact"
        />
      </div>

      <div className="div_container_contact">
        <div className="container_form">
          <h1 className="h1_contact">Contactez-nous</h1>

          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                id="name1"
                name="name1"
                value={formData.name1}
                onChange={handleChange}
                required
                className={formData.name1 ? "focused" : ""}
              />
              <label htmlFor="name1">Nom</label>
            </div>

            <div className="input-container">
              <input
                type="email"
                id="email1"
                name="email1"
                value={formData.email1}
                onChange={handleChange}
                required
                className={formData.email1 ? "focused" : ""}
              />
              <label htmlFor="email1">Email</label>
            </div>

            <div className="input-container">
              <input
                type="tel"
                id="telephone1"
                name="telephone1"
                value={formData.telephone1}
                onChange={handleChange}
                pattern="^[0-9]{10}$"
                title="Veuillez entrer un numéro de téléphone de 10 chiffres."
                required
                className={formData.telephone1 ? "focused" : ""}
              />
              <label htmlFor="telephone1">Téléphone</label>
            </div>

            <div className="input-container">
              <textarea
                id="message1"
                name="message1"
                value={formData.message1}
                onChange={handleChange}
                required
                className={formData.message1 ? "focused" : ""}
              />
              <label htmlFor="message1">Message</label>
            </div>

            <button className="button_envoyer" type="submit">
              Envoyer
            </button>
          </form>
        </div>

        <div className="map_container">
          <LoadScript googleMapsApiKey="AIzaSyAmS3BJbSJHo_FREi_Xn2Hfjror9NvaVxc">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={{ lat: 50.82513, lng: 4.34519 }}
              zoom={10}
            >
              <Marker position={{ lat: 50.82513, lng: 4.34519 }} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default Contact;
