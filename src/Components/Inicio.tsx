import React, { useState, useEffect } from "react";

// Importar los css
import "./Inicio.css";
import "./Nosotros.css";
import "./IndustriasTres.css";
import "./Especialidades.css";
import "./Proceso.css";
import "./Novedades.css";
import "./Contactanos.css";
import "./UbicanosMensaje.css";
import "./Footer.css";

// actualizaciones Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Importar las imágenes

// Incio
import Logo from "../Media/Image/Tinici.png"; // Importa la imagen del logo

// Novedades
import novedadesImage1 from "../Media/Image/novedades1.jpg";
import novedadesImage2 from "../Media/Image/novedades2.jpg";
import novedadesImage3 from "../Media/Image/novedades3.png";
import novedadesImage4 from "../Media/Image/novedades4.png";

import IndustriaAutomatizacion from "../Media/Image/IndustriaAutomatizacion.png";
import IndustriaSeguridad from "../Media/Image/IndustriaSeguridad.png";
import EspecialidadInstrumentacion from "../Media/Image/Instrumentacion.png";
import EspecialidadAuProInd from "../Media/Image/AutomatizacionProcesoIndustrial.png";
import EspecialidadCableadoEstructurado from "../Media/Image/CableadoE.png";
import EspecialidadRedComInd from "../Media/Image/RedComInd.png";
import EspecialidadTeleReIn from "../Media/Image/TeleReIn.jpg";

import EspecialidadesEleYPot from "../Media/Image/EspecialidadesEleYPot.png";
import EspecialidadesSisBom from "../Media/Image/EspecialidadesSisBom.png";
import EspecialidadesDisTabEl from "../Media/Image/EspecialidadesDisTabEl.png";
import EspecialidadesSisPotEne from "../Media/Image/EspecialidadesSisPotEne.jpg";
import EspecialidadesSisACI from "../Media/Image/EspecialidadesSisACI.png";

import EspecialidadesVidCCTV from "../Media/Image/EspecialidadesVidCCTV.jpg";
import EspecialidadesSisAlaInt from "../Media/Image/EspecialidadesSisAlaInt.jpg";

// Footer
import FooterLogo from "../Media/Image/T-Control.png"; // Importa la imagen

const Inicio: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState<"es" | "en">("es"); // Estado para el idioma

  const images = [
    IndustriaAutomatizacion,
    EspecialidadAuProInd,
    EspecialidadesSisPotEne,
    EspecialidadTeleReIn,
  ];

  const translations = {
    es: {
      welcome: "Bienvenido a",
      description:
        "Desarrollamos soluciones inteligentes para hacer que los sistemas industriales sean más eficientes, seguros y conectados",
      services: "Servicios",
      us: "Nosotros",
      industries: "Industrias",
      specialties: "Especialidades",
      contact: "Conecta!",
      about: "Sobre nosotros",
      mission: "Misión",
      vision: "Visión",
      values: "Nuestros Valores",
    },
    en: {
      welcome: "Welcome to",
      description:
        "We develop smart solutions to make industrial systems more efficient, secure, and connected",
      services: "Services",
      us: "About Us",
      industries: "Industries",
      specialties: "Specialties",
      contact: "Connect!",
      about: "About Us",
      mission: "Mission",
      vision: "Vision",
      values: "Our Values",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  //  Industrias Tres

  const slides = [
    {
      img: "https://i.pinimg.com/736x/af/3a/bd/af3abdcde2f0de641a26a127d93991a7.jpg",
      title: "Eléctrica",
      text: "Infraestructura energética y distribución eficiente.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/07/31/16/18/engineer-2558705_1280.jpg",
      title: "Redes y Telecomunicaciones",
      text: "Soluciones en conectividad y comunicaciones.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/02/06/16/32/architect-3979490_1280.jpg",
      title: "Construcción",
      text: "Ingeniería y sistemas electromecánicos para proyectos industriales.",
    },
    {
      img: "https://i.pinimg.com/736x/f1/24/55/f124556a1b6281e7c119730fd5c7cb56.jpg",
      title: "Agroindustria",
      text: "Automatización y mantenimiento de plantas de procesamiento.",
    },
    {
      img: IndustriaAutomatizacion,
      title: "Automatización y Control Industrial",
      text: "Optimización de procesos con tecnología avanzada.",
    },
    {
      img: IndustriaSeguridad,
      title: "Seguridad Electrónica y Videovigilancia",
      text: "Protección y monitoreo inteligente.",
    },

    {
      img: "https://cdn.pixabay.com/photo/2017/10/31/13/55/desk-2905361_1280.jpg",
      title: "Industrial",
      text: "Soluciones industriales avanzadas.",
    },
  ];

  // Imagenes de Especialidades
  const specialtiesIYR = [
    //INFRAESTRUCTURA & REDES
    {
      title: "Cableado Estructurado",
      image: EspecialidadCableadoEstructurado,
    },
    {
      title: "Redes de Comunicación Industrial",
      image: EspecialidadRedComInd,
    },
    {
      title: "Telecomunicaciones & Redes Inalámbricas",
      image: EspecialidadTeleReIn,
    },
  ];
  const specialtiesELECT = [
    //ENERGIA & POTENCIA
    {
      title: "Sistemas de Bombeo",
      image: EspecialidadesSisBom,
    },
    {
      title: "Diseño e instalación de Tableros Eléctricos",
      image: EspecialidadesDisTabEl,
    },
    {
      title: "Electricidad Industrial",
      image: EspecialidadesEleYPot,
    },
    {
      title: "Sistemas de Potencia & Energía",
      image: EspecialidadesSisPotEne,
    },
    {
      title: "Sistemas ACI y DACI ",
      image: EspecialidadesSisACI,
    },
  ];

  const specialtiesVID = [
    //SEGURIDAD ELECTRONICA */
    {
      title: "Videovigilancia CCTV",
      image: EspecialidadesVidCCTV,
    },
    {
      title: "Sistemas de Alarmas y Seguridad Inteligente",
      image: EspecialidadesSisAlaInt,
    },
  ];

  const specialties = [
    // AUTOMATIZACION Y CONTROL
    {
      title: "Sistemas SCADA y Telemetría",
      image:
        "https://imgs.search.brave.com/bCpH0-SWojSChsIxkmXaWzNl6U5eLsEq-ztCPf_8Fgk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk2/MjY0MTU2L2VzL2Zv/dG8vc2lzdGVtYS1k/ZS1jb250cm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/MXYwdUpaLWlEaHNk/cmwwcXlWNlk5WFZZ/Y3hVVFM4OWxyTUY2/MGV4RkxjPQ",
    },
    {
      title: "Instrumentación y control",
      image: EspecialidadInstrumentacion,
    },
    {
      title: "Automatización de Procesos Industriales",
      image: EspecialidadAuProInd,
    },
  ];

  // Novedades
  const novedadesData = [
    {
      titulo:
        "Suministro y montaje de equipos electromecánicos - Pivotes de Riego",
      img: novedadesImage1,
    },
    {
      titulo: "Suministro, montaje y puesta en marcha de sistemas de bombeo",
      img: novedadesImage2,
    },
    {
      titulo: "Sistemas hidrotérmico para la producción de mango (importación)",
      img: novedadesImage3,
    },
    {
      titulo:
        "Diseño, ensamblaje e instalación de tableros eléctricos y de control",
      img: novedadesImage4,
    },
  ];

  // Datos

  const [showOverlay, setShowOverlay] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:tcontrolsac@gmail.com?subject=Consulta%20desde%20la%20web&body=Mensaje:%20${encodeURIComponent(
      mensaje
    )}%0ACorreo:%20${encodeURIComponent(correo)}`;
    window.location.href = mailtoLink;
  };

  return (
    // CONTENEDOR DE INICIO ---------------------------------------------------------------------------------------------------------------
    <div className="App">
      <div className="inicio-container Inicio">
        {/* Fondo dinámico con imágenes */}
        <div
          className="carousel-background"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        >
          <div className="overlay"></div> {/* Overlay oscuro */}
        </div>

        {/* Barra de Navegación */}
        <nav className="navbar navbar-expand-lg navbar-transparent barraNav">
          <div className="container-fluid navbar-custom CI">
            {/* Logo a la izquierda */}
            <a className="navbar-brand" href="#Inicio">
              <img src={Logo} alt="Logo" className="logo-img" />
            </a>

            {/* Botón de colapso en pantallas pequeñas */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menú colapsable */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link OpcionMenu a" href="#Nosotros">
                    {translations[language].us}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link OpcionMenu c" href="#Industria">
                    {translations[language].industries}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link OpcionMenu b" href="#Especialidades">
                    {translations[language].specialties}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link OpcionMenu d" href="#Novedades">
                    Novedades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link OpcionMenu e" href="#Contactanos">
                    {translations[language].contact}
                  </a>
                </li>
              </ul>
              {/* Botón para cambiar idioma */}
              <button className="btn btn-language" onClick={toggleLanguage}>
                {language === "es" ? "EN" : "ES"}
              </button>
            </div>
          </div>
        </nav>

        {/* Contenido principal */}
        <div className="contenido-inicio">
          <h1 className="tituloInicio">
            {translations[language].welcome}{" "}
            <span className="marca">T-Control</span>
          </h1>
          <p className="ContInicio">{translations[language].description}</p>
          <button
            className="btn BServicios"
            onClick={() => (window.location.href = "#Especialidades")}
          >
            {translations[language].services}
          </button>
        </div>
      </div>

      {/* Sección Nosotros ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="nosotros" id="Nosotros">
        <h2 className="nosotros-titulo">Nosotros</h2>
        <br />
        <br />

        <p className="nosotros-subtitulo">
          Somos el aliado estratégico que integra automatización, ingeniería y
          telecomunicaciones para impulsar el crecimiento sostenible de tu
          industria.
        </p>
        <br />

        <div className="nosotros-cards">
          {/* Misión */}
          <div className="cardNosotros">
            <div className="card-inner">
              <div className="card-front mision bordeCard"></div>
              <div className="card-back">
                <p className="card-text-Nosotros">
                  Revolucionamos la industria con soluciones integrales en
                  automatización y control, potenciando la eficiencia, seguridad
                  y sostenibilidad en cada proceso.
                </p>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="cardNosotros">
            <div className="card-inner">
              <div className="card-front vision bordeCard"></div>
              <div className="card-back">
                <p className="card-text-Nosotros">
                  Ser el referente nacional en ingeniería y automatización,
                  marcando el camino hacia un futuro industrial inteligente y
                  transformador
                </p>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="cardNosotros">
            <div className="card-inner">
              <div className="card-front valores bordeCard"></div>
              <div className="card-back">
                <p className="card-text-Nosotros">
                  Somos integridad, Calidad, Seguridad, Respeto al medio
                  ambiente y la innovación en cada proceso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** IndustriasTres------------------------------------------------------------------------------------------------------------------ */}

      <section className="industria3-section" id="Industria">
        {/* Título de la sección */}
        <h2 className="industria3-title">Industrias</h2>
        <br />
        {/* Subtítulo de la sección */}
        <p className="industria3-subtitle">
          Brindamos soluciones especializadas para diversas industrias clave en
          el Perú.
        </p>
        <br />

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

      {/* Sección Especialidades ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="container my-5" id="Especialidades">
        <h2 className="text-center mb-4 tituloEspecialidades">
          Especialidades
        </h2>{" "}
        <br />
        <h3 className="text-center">Automatización y Control</h3>
        <br />
        <div className="row">
          {specialties.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="especialidades-card-unique">
                <div
                  className="especialidades-card-image-unique"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Capa oscura para resaltar el texto */}
                  <div className="overlay-dark-unique"></div>
                  <h3 className="especialidades-card-title-unique">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Infraestructura y redes */}

      <section className="container my-5" id="Especialidades">
        <h3 className="text-center">Infraestructura y Redes</h3>
        <br />
        <br />
        <div className="row">
          {specialtiesIYR.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="especialidades-card-unique">
                <div
                  className="especialidades-card-image-unique"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Capa oscura para resaltar el texto */}
                  <div className="overlay-dark-unique"></div>
                  <h3 className="especialidades-card-title-unique">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Energía y potencia */}

      <section className="container my-5" id="Especialidades">
        <h3 className="text-center">Energía y Potencia</h3>
        <br />
        <br />
        <div className="row potencia">
          {specialtiesELECT.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="especialidades-card-unique">
                <div
                  className="especialidades-card-image-unique"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Capa oscura para resaltar el texto */}
                  <div className="overlay-dark-unique"></div>
                  <h3 className="especialidades-card-title-unique">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Seguridad Electronica */}

      <section className="container my-5" id="Especialidades">
        <h3 className="text-center">Seguridad Electronica</h3>
        <br />
        <br />
        <div className="row vigilancia">
          {specialtiesVID.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="especialidades-card-unique">
                <div
                  className="especialidades-card-image-unique"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* Capa oscura para resaltar el texto */}
                  <div className="overlay-dark-unique"></div>
                  <h3 className="especialidades-card-title-unique">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Sección Proceso ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="container SProceso" id="Proceso">
        <div className="text-center">
          <p className="pProceso">Nuestro Proceso de Trabajo en Tcontrol</p>
        </div>

        <div className="d-flex justify-content-center gap-3 mt-4 Proceso-cards">
          {/* Card de Contacta */}
          <div className="card custom-card-Proceso">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title-Proceso text-center custom-title-Proceso">
                Consulta y Diagnóstico
              </h5>
              <br />
              <br />

              <p className="card-text text-center custom-text-Proceso">
                Recibimos sus necesidades, realizamos una evaluacion técnica y
                definimos el alcance del proyecto.
              </p>
              <br />
              <div className="d-flex justify-content-center mt-1">
                <a href="#Datos" className="btn custom-btn-proceso">
                  Vamos
                </a>
                <br />
              </div>
              {/* SVG en la parte inferior central de la tarjeta */}
              <div className="svg-icon-container">
                <svg
                  className="svg-icon"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 25.465h13a1 1 0 1 0 0-2H10a1 1 0 1 0 0 2zM36 29.465H10a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zM36 35.465H10a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z"
                    fill="#222222"
                    opacity="1"
                    data-original="#000000"
                  ></path>
                  <path
                    d="m54.072 2.535-34.142-.07c-3.27 0-5.93 2.66-5.93 5.93v5.124l-8.07.017c-3.27 0-5.93 2.66-5.93 5.93v21.141c0 3.27 2.66 5.929 5.93 5.929H12v10a1 1 0 0 0 1.74.673l9.704-10.675 16.626-.068c3.27 0 5.93-2.66 5.93-5.929v-.113l5.26 5.786a1.002 1.002 0 0 0 1.74-.673v-10h1.07c3.27 0 5.93-2.66 5.93-5.929V8.465a5.937 5.937 0 0 0-5.928-5.93zM44 40.536a3.934 3.934 0 0 1-3.934 3.929l-17.07.07a1 1 0 0 0-.736.327L14 53.949v-8.414a1 1 0 0 0-1-1H5.93A3.934 3.934 0 0 1 2 40.606V19.465a3.935 3.935 0 0 1 3.932-3.93L15 15.516h.002l25.068-.052a3.934 3.934 0 0 1 3.93 3.93v21.142zm14-10.93a3.934 3.934 0 0 1-3.93 3.929H52a1 1 0 0 0-1 1v8.414l-5-5.5V19.395c0-3.27-2.66-5.93-5.932-5.93L16 13.514v-5.12a3.934 3.934 0 0 1 3.928-3.93l34.141.07h.002a3.934 3.934 0 0 1 3.93 3.93v21.142z"
                    fill="#222222"
                    opacity="1"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Card de Genera una estrategia */}
          <div className="card custom-card-Proceso">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title-Proceso text-center custom-title-Proceso">
                Diseño y Planificación
              </h5>
              <br />
              <br />
              <p className="card-text text-center custom-text-Proceso">
                Desarrollamos una solución personalizada a sus necesidades con
                ingeniería detallada y planificación eficiente.
              </p>
              <br />
              <br />
              <div className="d-flex justify-content-center mt-1">
                <a href="#Datos" className="btn custom-btn-proceso">
                  Vamos
                </a>
              </div>{" "}
              <br />
              {/* SVG en la parte inferior central de la tarjeta */}
              <div className="svg-icon-container">
                <svg
                  className="svg-icon"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M248 129.078 306.895 80H384V0H192v80h56zM208 64V16h160v48h-66.895L264 94.922V64zm0 0"
                      fill="#222222"
                      opacity="1"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M224 32h16v16h-16zM256 32h64v16h-64zM336 32h16v16h-16zM407.238 480l-6.468-64.762C427.48 411.016 448 387.887 448 360V256h-32v-11.055c0-10.875-5.977-20.64-15.586-25.648C409.97 210.52 416 197.969 416 184v-16c0-26.473-21.527-48-48-48s-48 21.527-48 48v16c0 20.71 13.207 38.344 31.625 45.063L308.687 272h-44.863c-.894-13.336-10.054-24.96-23.031-28.672L208 233.968V219.68c9.793-8.793 16-21.504 16-35.68v-16c0-26.473-21.527-48-48-48s-48 21.527-48 48v16c0 14.168 6.207 26.879 16 35.68v14.297l-32.793 9.359C97.543 247.23 88 259.886 88 274.106V304H56v48h16v128H0v16h496v-16zM336 352v-36.688l56.688-56.687c4.097-4.098 6.535-9.602 7.082-15.344.07.559.23 1.086.23 1.664V344c0 13.23-10.77 24-24 24h-64v-16zm-24 64h40.762l6.398 64H312zm56.84 0h15.922l6.398 64h-15.922zM416 344v-72h16v88c0 22.055-17.945 40-40 40h-80v-16h64c22.055 0 40-17.945 40-40zm-80-160v-16c0-17.648 14.352-32 32-32s32 14.352 32 32v16c0 17.648-14.352 32-32 32s-32-14.352-32-32zm-20.688 104 53.375-53.375a9.03 9.03 0 0 1 6.344-2.625c4.946 0 8.969 4.023 8.969 8.969a9.03 9.03 0 0 1-2.625 6.344L324.687 304H240c-4.414 0-8-3.586-8-8s3.586-8 8-8zM144 168c0-17.648 14.352-32 32-32s32 14.352 32 32v16c0 17.648-14.352 32-32 32s-32-14.352-32-32zm32 64c5.617 0 10.984-1.023 16-2.8v8.593c-1.984 3.062-7.496 10.207-16 10.207s-14.016-7.145-16-10.207v-8.594c5.016 1.778 10.383 2.801 16 2.801zm-72 42.105c0-7.113 4.777-13.433 11.602-15.386l32.957-9.414C153.199 255.352 162.23 264 176 264s22.8-8.648 27.441-14.703l32.957 9.414c6.13 1.754 10.403 7.082 11.258 13.281H240c-13.23 0-24 10.77-24 24 0 2.817.574 5.488 1.473 8H104zM72 320h248v16H72zm16 64h24v-16H88v-16h208v16H128v16h168v96h-19.055l-16-32h-137.89l-16 32H88zm171.055 96h-134.11l8-16h118.11zm0 0"
                      fill="#222222"
                      opacity="1"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Card de Desarrolla */}
          <div className="card custom-card-Proceso">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title-Proceso text-center custom-title-Proceso">
                Implementación, Pruebas y puesta en marcha
              </h5>
              <br />
              <p className="card-text text-center custom-text-Proceso">
                Instalamos sistemas de ingeniería solicitados, verificamos con
                pruebas funcionales y aseguramos una operación correcta.
              </p>
              <div className="d-flex justify-content-center mt-1">
                <a href="#Datos" className="btn custom-btn-proceso">
                  Vamos
                </a>
              </div>
              <br />
              {/* SVG en la parte inferior central de la tarjeta */}
              <div className="svg-icon-container">
                <svg
                  className="svg-icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <circle
                      cx="7.203"
                      cy="16.5"
                      r="1.886"
                      fill="#222222"
                      opacity="1"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M15.141 6.014c1.786 0 3.236 1.45 3.236 3.236s-1.45 3.236-3.236 3.236-3.236-1.45-3.236-3.236 1.45-3.236 3.236-3.236zm0 1.5a1.737 1.737 0 0 0 0 3.472 1.737 1.737 0 0 0 0-3.472zM8.955 10.815l.473 1.141c.207.101.407.217.598.345l1.225-.16a.748.748 0 0 1 .662.25 6.255 6.255 0 0 1 1.204 2.085.748.748 0 0 1-.115.698l-.751.981c.016.23.016.461 0 .689l.751.982a.748.748 0 0 1 .115.698 6.255 6.255 0 0 1-1.204 2.085.748.748 0 0 1-.662.25l-1.225-.16a5.137 5.137 0 0 1-.597.345l-.474 1.141a.748.748 0 0 1-.548.448 6.248 6.248 0 0 1-2.407 0 .748.748 0 0 1-.548-.448l-.473-1.141a5.068 5.068 0 0 1-.598-.345l-1.225.16a.748.748 0 0 1-.662-.25 6.255 6.255 0 0 1-1.204-2.085.748.748 0 0 1 .115-.698l.751-.981a4.951 4.951 0 0 1 0-.689l-.751-.982a.748.748 0 0 1-.115-.698 6.255 6.255 0 0 1 1.204-2.085.748.748 0 0 1 .662-.25l1.225.16c.191-.128.391-.244.597-.345l.474-1.141A.748.748 0 0 1 6 10.367a6.248 6.248 0 0 1 2.407 0 .748.748 0 0 1 .548.448zm-1.224.964a4.771 4.771 0 0 0-1.055 0l-.426 1.026a.755.755 0 0 1-.406.406 3.526 3.526 0 0 0-.809.467.754.754 0 0 1-.554.149l-1.102-.144c-.209.284-.386.59-.528.914l.676.882a.748.748 0 0 1 .148.554c-.041.31-.041.624 0 .934a.748.748 0 0 1-.148.554s-.676.882-.675.883c.141.323.318.629.527.913l1.102-.144a.754.754 0 0 1 .554.149c.248.191.52.348.809.467a.755.755 0 0 1 .406.406l.426 1.026c.351.039.704.039 1.055 0l.426-1.026a.751.751 0 0 1 .406-.406c.289-.119.561-.276.809-.467a.754.754 0 0 1 .554-.149l1.102.144c.209-.284.386-.59.527-.914l-.675-.882a.748.748 0 0 1-.148-.554c.041-.31.041-.624 0-.934a.748.748 0 0 1 .148-.554l.675-.883a4.74 4.74 0 0 0-.527-.913l-1.102.144a.754.754 0 0 1-.554-.149 3.526 3.526 0 0 0-.809-.467.751.751 0 0 1-.406-.406z"
                      fill="#222222"
                      opacity="1"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M14.985 17.248a.75.75 0 0 1 .03-1.499c.33.006.66-.013.989-.057l.614-1.48a.753.753 0 0 1 .407-.406c.4-.165.777-.383 1.12-.646a.745.745 0 0 1 .554-.149l1.59.207c.353-.457.643-.96.863-1.494l-.975-1.273a.75.75 0 0 1-.148-.554 4.917 4.917 0 0 0 0-1.294.75.75 0 0 1 .148-.554l.974-1.273a6.446 6.446 0 0 0-.862-1.494l-1.59.207a.745.745 0 0 1-.554-.149 4.936 4.936 0 0 0-1.12-.646.753.753 0 0 1-.407-.406l-.615-1.481a6.512 6.512 0 0 0-1.725.001l-.615 1.48a.748.748 0 0 1-.406.406c-.4.165-.777.383-1.12.646a.745.745 0 0 1-.554.149l-1.59-.207c-.353.457-.643.96-.863 1.494l.975 1.273a.75.75 0 0 1-1.191.912L7.686 7.358a.753.753 0 0 1-.114-.699 8.007 8.007 0 0 1 1.54-2.668.753.753 0 0 1 .663-.251l1.705.224c.289-.201.595-.377.913-.528l.659-1.588a.75.75 0 0 1 .549-.448 7.98 7.98 0 0 1 3.08 0 .748.748 0 0 1 .548.448l.659 1.588c.319.151.624.327.914.527l1.705-.223a.751.751 0 0 1 .662.251 7.993 7.993 0 0 1 1.541 2.668.75.75 0 0 1-.115.699L21.55 8.722c.029.351.029.704 0 1.055l1.045 1.365a.75.75 0 0 1 .115.699 7.993 7.993 0 0 1-1.541 2.668.751.751 0 0 1-.662.251l-1.705-.224a6.426 6.426 0 0 1-.913.528l-.66 1.588a.748.748 0 0 1-.548.448c-.56.11-1.128.16-1.696.148z"
                      fill="#222222"
                      opacity="1"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Card de Escala */}
          <div className="card custom-card-Proceso">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title-Proceso text-center custom-title-Proceso">
                Soporte y Mantenimiento
              </h5>
              <br />
              <br />
              <p className="card-text text-center custom-text-Proceso">
                Brindamos asistencia tecnica, y mantenimiento para garantizar
                una operacion continua de sus sistemas.
              </p>
              <div className="d-flex justify-content-center mt-1">
                <a href="#Datos" className="btn custom-btn-proceso">
                  Vamos
                </a>
              </div>
              {/* SVG en la parte inferior central de la tarjeta */}
              <div className="svg-icon-container">
                <svg
                  className="svg-icon"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M62 29v6a3.003 3.003 0 0 1-3 3h-4.276a23.242 23.242 0 0 1-2.413 5.818l3.027 3.036a3.005 3.005 0 0 1-.001 4.233l-4.25 4.25a3.063 3.063 0 0 1-4.234 0l-3.035-3.026A23.242 23.242 0 0 1 38 54.724V59a3.003 3.003 0 0 1-3 3h-6a3.003 3.003 0 0 1-3-3v-4.276a23.557 23.557 0 0 1-3.619-1.282 1.007 1.007 0 0 1-.299-1.618l4.25-4.26a1.001 1.001 0 0 1 .995-.252A16.275 16.275 0 0 0 32 48a16 16 0 1 0-16-16 16.252 16.252 0 0 0 .688 4.664.999.999 0 0 1-.251.993l-4.26 4.26a1.006 1.006 0 0 1-1.62-.298A23.643 23.643 0 0 1 9.276 38H5a3.003 3.003 0 0 1-3-3v-6a3.003 3.003 0 0 1 3-3h4.276a23.253 23.253 0 0 1 2.413-5.819l-3.027-3.035a3.005 3.005 0 0 1 .001-4.233l4.25-4.25a3.063 3.063 0 0 1 4.234 0l3.035 3.026A23.242 23.242 0 0 1 26 9.276V5a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v4.276a23.242 23.242 0 0 1 5.818 2.413l3.036-3.027a3.063 3.063 0 0 1 4.233.001l4.25 4.25a3.005 3.005 0 0 1 0 4.234l-3.026 3.034A23.253 23.253 0 0 1 54.724 26H59a3.003 3.003 0 0 1 3 3Zm-18.609-2.104a1.007 1.007 0 0 0-1.655-.39l-4.55 4.552-3.183-1.061-1.06-3.183 4.55-4.55a1.007 1.007 0 0 0-.389-1.655 9.985 9.985 0 0 0-12.837 12.053L3.552 53.377a5 5 0 1 0 7.071 7.07l20.715-20.714A9.985 9.985 0 0 0 43.39 26.896Z"
                      fill="#222222"
                      opacity="1"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sección Novedades ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="novedades-section" id="Novedades">
        <div className="container text-center">
          {/* Título */}
          <h2 className="novedades-title">Novedades</h2>
          <br />
          <br />
          {/* Subtítulo */}
          <p className="novedades-subtitle">
            Cada solución implementada refleja nuestro compromiso con la
            innovación tecnológica y la excelencia operativa.
          </p>
          <br />

          {/* Contenedor de las tarjetas de novedades */}
          <div className="novedades-cards d-flex flex-wrap justify-content-center">
            {novedadesData.map((item, index) => (
              <div className="novedad-card" key={index}>
                <div className="novedad-image">
                  <img src={item.img} alt={item.titulo} />
                  {/* Div pequeño inferior */}
                  <div className="novedad-info">
                    {/*<span className="novedad-fecha">{item.fecha}</span>*/}
                    <h4 className="novedad-titulo">{item.titulo}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sección Contactanos ----------------------------------------------------------------------------------------------------------------------*/}
      <section className="container my-5 Contactanos" id="Contactanos">
        <div className="text-center">
          <h1 className="HContactanos">Hablemos sobre tu proyecto</h1>
          <br />
          <br />
          <p className="pContactanos">
            Conéctese con nuestro equipo y empecemos a transformar su empresa
            con innovación y tecnología
          </p>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4 Contactanos-cards">
          {/* Card de WhatsApp */}
          <a href="https://wa.me/51941956585" className="custom-card-link">
            <div className="card custom-card-Contactanos">
              <div className="card-body d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icon"
                >
                  <path
                    d="M438.957 19.477H73.043C32.766 19.477 0 52.244 0 92.52v246.961c0 40.276 32.766 73.043 73.043 73.043h28.663l.561 64.483a15.648 15.648 0 0 0 15.649 15.517 15.64 15.64 0 0 0 9.565-3.262l99.425-76.738h212.051c40.277 0 73.043-32.767 73.043-73.043V92.52c0-40.276-32.766-73.043-73.043-73.043zm41.739 320.005c0 23.015-18.724 41.739-41.739 41.739H221.569c-3.46 0-6.823 1.147-9.563 3.261l-78.711 60.75-.422-48.495c-.074-8.591-7.06-15.516-15.651-15.516H73.043c-23.015 0-41.739-18.724-41.739-41.739V92.52c0-23.015 18.724-41.739 41.739-41.739h365.915c23.015 0 41.739 18.724 41.739 41.739v246.962z"
                    fill="#222222"
                    opacity="1"
                  />
                </svg>
                <h5 className="card-title-Contactanos text-center custom-title-Contactanos">
                  WhatsApp
                </h5>
                <p className="card-text text-center custom-text-Contactanos">
                  Responderemos tu mensaje a la brevedad posible
                </p>
              </div>
            </div>
          </a>

          {/* Card de E-mail */}
          <a href="mailto:tcontrolsac@gmail.com" className="custom-card-link">
            <div className="card custom-card-Contactanos">
              <div className="card-body d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="icon"
                >
                  <path
                    d="M 19 20.5 H 5 a 4.004 4.004 0 0 1 -4 -4 v -9 a 4.004 4.004 0 0 1 4 -4 h 14 a 4.004 4.004 0 0 1 4 4 v 9 a 4.004 4.004 0 0 1 -4 4 Z M 5 5.5 a 2.002 2.002 0 0 0 -2 2 v 9 a 2.002 2.002 0 0 0 2 2 h 14 a 2.002 2.002 0 0 0 2 -2 v -9 a 2.002 2.002 0 0 0 -2 -2 Z"
                    fill="#222222"
                  />
                  <path
                    d="M 12 13.434 a 4.993 4.993 0 0 1 -3.07 -1.055 L 2.386 7.29 A 1 1 0 0 1 3.614 5.71 l 6.544 5.09 a 2.995 2.995 0 0 0 3.684 0 l 6.544 -5.09 a 1 1 0 0 1 1.228 1.58 l -6.544 5.09 A 4.996 4.996 0 0 1 12 13.433 Z"
                    fill="#222222"
                  />
                </svg>
                <h5 className="card-title-Contactanos text-center custom-title-Contactanos">
                  E-mail
                </h5>
                <p className="card-text text-center custom-text-Contactanos">
                  Estaremos leyendote por nuestro correo
                </p>
              </div>
            </div>
          </a>

          {/* Card de Calendly */}
          <a
            href="https://calendly.com/hersson-stewar-aefy/30min?month=2025-03"
            className="custom-card-link"
          >
            <div className="card custom-card-Contactanos calendly">
              <div className="card-body d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="icon calendly-icon"
                >
                  <path
                    d="M56.562 17.372C56.246 12.117 51.858 8 46.573 8H44V6a2 2 0 0 0-4 0v2H24V6a2 2 0 0 0-4 0v2h-2.573c-5.286 0-9.674 4.117-9.989 9.372-.593 9.884-.582 19.91.033 29.799.312 5.022 4.335 9.045 9.357 9.357 5.033.313 10.102.469 15.171.469 5.068 0 10.138-.156 15.171-.469 5.022-.312 9.045-4.335 9.357-9.357.616-9.884.627-19.909.035-29.799zm-4.026 29.551a6.006 6.006 0 0 1-5.613 5.613c-9.902.615-19.944.615-29.846 0a6.006 6.006 0 0 1-5.613-5.613A241.309 241.309 0 0 1 11.147 24h41.707c.252 7.64.155 15.323-.318 22.923zM22 16a2 2 0 0 0 2-2v-2h16v2a2 2 0 0 0 4 0v-2h2.573c3.173 0 5.807 2.465 5.996 5.611.047.794.067 1.593.106 2.389h-41.35c.04-.796.059-1.595.106-2.389C11.62 14.465 14.253 12 17.427 12H20v2a2 2 0 0 0 2 2z"
                    fill="#222222"
                    opacity="1"
                  />
                </svg>
                <h5 className="card-title-Contactanos text-center custom-title-Contactanos">
                  Calendly
                </h5>
                <p className="card-text text-center custom-text-Contactanos">
                  Agenda una reunión con nosotros
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/*UBICANOS MENSAJE ---------------------------------------------------------------------------------------------------------------------- */}

      <section className="ubicanos-section py-5" id="Datos">
        <div className="container">
          <h2 className="text-center mb-4 tituloUbicanos">Ubícanos</h2>
          <br />
          <div className="ubicanos-map-container">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18901.367463878105!2d-80.66707304596146!3d-5.180121735404398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a107c793c39b7%3A0x1de8948d1c01fe28!2sPiura!5e0!3m2!1ses!2spe!4v1743877675355!5m2!1ses!2spe"
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
                    width="35"
                    height="35"
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
              {/*<p className="mb-1 Tub">T-Control- Perú</p>
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
              </div>*/}
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
                <div className="btn-group mt-3 datos-buttons">
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

      {/* Footer ----------------------------------------------------------------------------------------------------------------------*/}
      <footer className="footer" id="Footer">
        <div className="footer-top">
          <h2 className="Footer-Titulo">
            Estamos listos para llevar tus proyectos al siguiente nivel.
          </h2>
        </div>
        <div className="footer-main">
          <div className="footer-section contact">
            <img
              src={FooterLogo} // Usa la imagen importada
              alt="T-Control Logo"
              className="footer-logo"
            />
            <br />
            <br />
            <p>T-Control EIRL, Piura, Perú</p>
            <p>
              <a href="mailto:tcontrolsac@gmail.com">tcontrolsac@gmail.com</a>
            </p>
            <p>
              <a href="tel:+51941956585">+51 941956585</a>
            </p>
            <br />
            <div className="social-icons">
              <a href="mailto:tcontrolsac@gmail.com" className="social-icon">
                {/* Icono de Email */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill-rule="evenodd"
                    d="M256 512C114.841 512 0 397.159 0 256S114.841 0 256 0s256 114.841 256 256-114.841 256-256 256zm132.758-166.069a5.732 5.732 0 0 0 5.725-5.725V179.489l-130.25 103.432c-2.41 1.915-5.323 2.872-8.234 2.872s-5.823-.958-8.234-2.872L117.516 179.489v160.717a5.732 5.732 0 0 0 5.725 5.725zm-19.96-179.862L256 255.644l-112.799-89.575zm52.168 5.725v168.414c0 17.759-14.449 32.208-32.208 32.208H123.241c-17.76 0-32.207-14.449-32.207-32.208V171.794c0-17.759 14.448-32.207 32.207-32.207h265.517c17.759-.001 32.208 14.448 32.208 32.207z"
                    clip-rule="evenodd"
                    fill="#fff"
                    opacity="1"
                  />
                </svg>
              </a>
              <a href="https://www.facebook.com" className="social-icon">
                {/* Icono de Facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 155.139 155.139"
                >
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    style={{ fill: "#fff" }}
                    opacity="1"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/tcontroleirl/"
                className="social-icon"
              >
                {/* Icono de LinkedIn */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    fill="#fff"
                    opacity="1"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com" className="social-icon">
                {/* Icono de Instagram */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 55 55"
                >
                  <path
                    d="M30 20.83c-5.06 0-9.17 4.11-9.17 9.17s4.11 9.18 9.17 9.18 9.18-4.12 9.18-9.18-4.12-9.17-9.18-9.17z"
                    fill="#fff"
                    opacity="1"
                  />
                  <path
                    d="M43.84 5H16.16C10.01 5 5 10.01 5 16.16v27.68C5 50 10.01 55 16.16 55h27.68C50 55 55 50 55 43.84V16.16C55 10.01 50 5 43.84 5zM30 46.2c-8.93 0-16.2-7.27-16.2-16.2S21.07 13.81 30 13.81 46.2 21.07 46.2 30 38.93 46.2 30 46.2zm16.54-29.45c-1.89 0-3.43-1.53-3.43-3.42s1.54-3.43 3.43-3.43 3.43 1.54 3.43 3.43-1.54 3.42-3.43 3.42z"
                    fill="#fff"
                    opacity="1"
                  />
                </svg>
              </a>
              <a href="https://wa.me/51941956585" className="social-icon">
                {/* Icono de WhatsApp */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0zm148.96 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section specialities">
            <h3>Especialidades</h3>
            <ul>
              {[
                "SCADA y Telemetría",
                "Instrumentación y Control",
                "Automatización de Procesos Industriales",
                "Cableado Estructurado",
                "Redes de Comunicación Industrial",
                "Telecomunicaciones & Redes Inalámbricas",
                "Electricidad Industrial",
                "Sistemas de Bombeo",
                "Diseño e instalación de Tableros Eléctricos",
                "Sistemas de Potencia & Energía",
                "Sistemas ACI y DACI",
                "Videovigilancia CCTV",
                "Sistemas de Alarmas y Seguridad Inteligente",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section industries">
            <h3>Industrias</h3>
            <ul>
              {[
                "Eléctrica",
                "Redes y Telecomunicaciones",
                "Construcción",
                "Agroindustria",
                "Automatización y Control Industrial",
                "Seguridad Electrónica y Videovigilancia",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section about">
            <h3>{translations[language].about}</h3>
            <ul>
              {[
                translations[language].mission,
                translations[language].vision,
                translations[language].values,
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="tControl2025">
            © 2025 T-Control. Todos los derechos reservados.
          </p>
          {/*<p>Política Ambiental</p>
          <p>Política de Calidad</p>
          <p>Privacidad</p>
          <p>Certificado ISO 9001:2015 </p>*/}
        </div>

        {/* Flecha de scroll hacia arriba */}
        <button className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            style={{ transform: "rotate(270deg)" }} // Rotación de 90 grados
          >
            <path
              className="pathFlecha"
              d="m22.707 11.293-7-7a1 1 0 0 0-1.414 1.414L19.586 11H2a1 1 0 0 0 0 2h17.586l-5.293 5.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z"
              fill="#222222"
            />
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default Inicio;
