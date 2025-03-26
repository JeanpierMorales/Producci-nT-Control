import React from "react";
import "./IndustriasTres.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const IndustriaTres: React.FC = () => {
  // Array de imágenes (9 elementos) con título y texto
  const slides = [
    {
      img: "https://i.pinimg.com/474x/d3/20/65/d32065ad9f01111e590f27591bb64767.jpg",
      title: "Eléctrica",
      text: "Infraestructura energética y distribución eficiente.",
    },
    {
      img: "https://i.pinimg.com/736x/77/66/e9/7766e998b2f9660847dc755e485e90df.jpg",
      title: "Redes y Telecomunicaciones",
      text: "Soluciones en conectividad y comunicaciones.",
    },
    {
      img: "https://i.pinimg.com/736x/f1/24/55/f124556a1b6281e7c119730fd5c7cb56.jpg",
      title: "Construcción",
      text: "Ingeniería y sistemas electromecánicos para proyectos industriales.",
    },
    {
      img: "https://i.pinimg.com/736x/e4/4c/3f/e44c3f9b18cc0125dd27170d93519983.jpg",
      title: "Agroindustria",
      text: "Automatización y mantenimiento de plantas de procesamiento.",
    },
    {
      img: "https://i.pinimg.com/736x/26/9c/f1/269cf1b98a1b7ba30c003a5818c81c8e.jpg",
      title: "Automatización y Control Industrial",
      text: "Optimización de procesos con tecnología avanzada.",
    },
    {
      img: "https://i.pinimg.com/736x/cd/df/e7/cddfe74d5a278fdc8c21e8ba9951577a.jpg",
      title: "Seguridad Electrónica y Videovigilancia",
      text: "Protección y monitoreo inteligente.",
    },
    {
      img: "https://i.pinimg.com/736x/b0/63/ee/b063ee8aae772be8d87e73ded5b97978.jpg",
      title: "Tecnológica",
      text: "Innovación y desarrollo tecnológico.",
    },
    {
      img: "https://i.pinimg.com/474x/d3/20/65/d32065ad9f01111e590f27591bb64767.jpg",
      title: "Industrial",
      text: "Soluciones industriales avanzadas.",
    },
    {
      img: "https://i.pinimg.com/736x/44/97/f6/4497f66210a1ff6821bfc8347cd744d2.jpg",
      title: "Automotriz",
      text: "Tecnología y eficiencia en la industria automotriz.",
    },
  ];

  return (
    <section className="industria3-section">
      {/* Título de la sección */}
      <h2 className="industria3-title">Industrias</h2>
      {/* Subtítulo de la sección */}
      <p className="industria3-subtitle">
        Nos enorgullece ofrecer soluciones de vanguardia que transforman la
        manera en que las empresas operan y optimizan sus procesos, impulsando
        la eficiencia, la productividad y la seguridad.
      </p>

      {/* Carrusel de Bootstrap con auto-slide cada 3 segundos */}
      <div
        id="carouselIndustria3Captions"
        className="carousel slide industria3-carousel"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        {/* Indicadores */}
        <div className="carousel-indicators industria3-carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselIndustria3Captions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner industria3-carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item industria3-carousel-item ${
                index === 0 ? "active" : ""
              }`}
            >
              <img
                src={slide.img}
                className="d-block w-100 industria3-slide-image"
                alt={`Slide ${index + 1}`}
              />
              {/* Overlay para oscurecer la imagen y resaltar el texto */}
              <div className="industria3-slide-overlay"></div>
              <div className="carousel-caption d-none d-md-block industria3-carousel-caption">
                <h5>{slide.title}</h5>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de retroceso */}
        <button
          className="carousel-control-prev industria3-carousel-control-prev"
          type="button"
          data-bs-target="#carouselIndustria3Captions"
          data-bs-slide="prev"
        >
          <span
            className="industria3-carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        {/* Botón de avance */}
        <button
          className="carousel-control-next industria3-carousel-control-next"
          type="button"
          data-bs-target="#carouselIndustria3Captions"
          data-bs-slide="next"
        >
          <span
            className="industria3-carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default IndustriaTres;
