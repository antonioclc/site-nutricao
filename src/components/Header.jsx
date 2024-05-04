/* eslint-disable react/prop-types */
import "./Header.css";
import { useRef, useState, useEffect } from "react";
import logo from "../../public/logo-nutriacao.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const headerHeight = headerRef.current.offsetHeight;
    const target = document.querySelector(sectionId);
    const offsetTop = target.offsetTop - headerHeight - 1; // Ajuste de posição

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleShow = () => {
      setMenuOpen(true);
    };

    const handleHide = () => {
      setMenuOpen(false);
    };

    document
      .querySelector(".navbar")
      .addEventListener("show.bs.collapse", handleShow);
    document
      .querySelector(".navbar")
      .addEventListener("hide.bs.collapse", handleHide);

    return () => {
      document
        .querySelector(".navbar")
        .removeEventListener("show.bs.collapse", handleShow);
      document
        .querySelector(".navbar")
        .removeEventListener("hide.bs.collapse", handleHide);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg header ${
        scrolled || isMenuOpen ? "header2" : "header1"
      }`}
      ref={headerRef}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo me-4" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  scrolled || isMenuOpen ? "navlink2" : "navlink1"
                }`}
                href="#sobre"
                onClick={(e) => scrollToSection(e, "#sobre")}
              >
                Sobre Nós
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  scrolled || isMenuOpen ? "navlink2" : "navlink1"
                }`}
                href="#servicos"
                onClick={(e) => scrollToSection(e, "#amamentacao")}
              >
                Amamentação e I.A.
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  scrolled || isMenuOpen ? "navlink2" : "navlink1"
                }`}
                href="#clientes"
                onClick={(e) => scrollToSection(e, "#primeira")}
              >
                Primeira Infância
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  scrolled || isMenuOpen ? "navlink2" : "navlink1"
                }`}
                href="#desnutricao"
              >
                Desnutrição
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
