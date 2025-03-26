import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./IndustriasDos.css";

// Componente funcional para la sección "IndustriasDos".
const IndustriasDos: React.FC = () => {
  // Datos de ejemplo para las 9 cards.
  const cardsData = [
    {
      title: "Eléctrica",
      text: " Nos enorgullece ofrecer soluciones de vanguardia que transforman la manera en que las empresas operan y optimizan sus procesos, impulsando la eficiencia, la productividad y la seguridad., Infraestructura energética y distribución eficiente..",
      img: "https://i.pinimg.com/474x/d3/20/65/d32065ad9f01111e590f27591bb64767.jpg",
    },
    {
      title: "Redes y Telecomunicaciones",
      text: "Nos enorgullece ofrecer soluciones de vanguardia que transforman la manera en que las empresas operan y optimizan sus procesos, impulsando la eficiencia, la productividad y la seguridad.Soluciones en conectividad y comunicaciones.",
      img: "https://i.pinimg.com/474x/d3/20/65/d32065ad9f01111e590f27591bb64767.jpg",
    },
    {
      title: "Construcción",
      text: "Nos enorgullece ofrecer soluciones de vanguardia que transforman la manera en que las empresas operan y optimizan sus procesos, impulsando la eficiencia, la productividad y la seguridad.Ingeniería y sistemas electromecánicos para proyectos industriales.",
      img: "https://i.pinimg.com/474x/d3/20/65/d32065ad9f01111e590f27591bb64767.jpg",
    },
    {
      title: "Agroindustria",
      text: "Nos enorgullece ofrecer soluciones de vanguardia que transforman la manera en que las empresas operan y optimizan sus procesos, impulsando la eficiencia, la productividad y la seguridad.Automatización y mantenimiento de plantas de procesamiento.",
      img: "https://i.pinimg.com/474x/d3/20/65/d32065ad9f01111e590f27591bb64767.jpg",
    },
    {
      title: "Automatización y control Industrial",
      text: "Nos enorgullece ofrecer soluciones de vanguardia que transforman la manera en que las empresas operan y optimizan sus procesos, impulsando la eficiencia, la productividad y la seguridad.Optimización de procesos con tecnología avanzada.",
      img: "https://i.pinimg.com/474x/d3/20/65/d32065ad9f01111e590f27591bb64767.jpg",
    },
    {
      title: "Seguridad electrónica y video Vigilancia",
      text: "Nos enorgullece ofrecer soluciones de vanguardia que transforman la manera en que las empresas operan y optimizan sus procesos, impulsando la eficiencia, la productividad y la seguridad.Protección y monitoreo inteligente.",
      img: "https://i.pinimg.com/474x/d3/20/65/d32065ad9f01111e590f27591bb64767.jpg",
    },
  ];

  return (
    <section className="industrias-section">
      {/* Encabezado: título y subtítulo centrados */}
      <div className="industrias-header text-center">
        <h2 className="industrias-title">Industrias</h2>
        <p className="industrias-subtitle">
          Nos enorgullece ofrecer soluciones de vanguardia que transforman la
          manera en que las empresas operan y optimizan sus procesos, impulsando
          la eficiencia, la productividad y la seguridad.
        </p>
      </div>
      {/* Contenedor de cards */}
      <div className="container">
        <div className="row industrias-cards-container">
          {cardsData.map((card, index) => (
            // Usamos las clases de Bootstrap para la responsividad:
            // col-lg-4: 3 columnas en pantallas grandes,
            // col-md-6: 2 columnas en pantallas medianas,
            // col-sm-12: 1 columna en móviles.
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 mb-4 gatBotom"
            >
              <div className="card industrias-custom-card h-100">
                {/* Imagen de la card */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="industrias-card-img-top"
                />
                {/* Cuerpo de la card con título y descripción */}
                <div className="card-body industrias-card-body">
                  <h5 className="industrias-card-title">{card.title}</h5>
                  <p className="industrias-card-text">{card.text}</p>
                </div>
                {/* Footer de la card: se muestran dos versiones según el tamaño de pantalla */}
                <span className="industrias-footer-text desktop">
                  T-Control
                </span>
                <span className="industrias-footer-text mobile">T-Control</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriasDos;
