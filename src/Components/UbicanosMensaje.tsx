import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UbicanosMensaje.css";

const UbicanosMensajes: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:omarsm.1928@gmail.com?subject=Consulta%20desde%20la%20web&body=Mensaje:%20${encodeURIComponent(
      mensaje
    )}%0ACorreo:%20${encodeURIComponent(correo)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="ubicanos-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 tituloUbicanos">Ubícanos</h2>
        <br />
        <div className="ubicanos-map-container">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592.103873250239!2d-80.62735437049088!3d-5.197512897716894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a107ddd0efae7%3A0xaeb976088d0ea599!2sPlaza%20de%20Armas%20de%20Piura!5e0!3m2!1ses!2spe!4v1741975395056!5m2!1ses!2spe"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
          <div className="ubicanos-contact-info">
            <h3 className="mb-3 Dub">
              Estamos en contacto
              <button
                className="btn message-btn"
                onClick={() => setShowOverlay(true)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#222"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 3h20v14H5l-3 3V3z"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h3>
            <p className="mb-1 Tub">T-Control- Perú</p>
            <p className="mb-1 Tub">987 654 321</p>
            <div className="ubicanos-social-icons">
              <a href="#!" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#!" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#!" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#!" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <h2 className="datos-title mb-4">Déjanos un mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  className="form-control datos-textarea"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="correo" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  id="correo"
                  className="form-control datos-email-input"
                  placeholder="name@mail.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </div>
              <div className="btn-group mt-3">
                <button type="submit" className="btn datos-btn">
                  Enviar
                </button>
                <button
                  className="btn btn-secondary back-btn"
                  onClick={() => setShowOverlay(false)}
                >
                  Atrás
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default UbicanosMensajes;
