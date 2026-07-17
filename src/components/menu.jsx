"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Menu.module.css";

const NAV = [
  {
    label: "Institucional",
    sub: "Conheça a Apolo",
    mega: {
      columns: [
        { links: ["A Empresa", "Grupo Marcopolo", "Missão e Valores"] },
        {
          links: [
            "Certificações ISO 9001",
            "Certificações ISO 14001",
            "Qualidade",
          ],
        },
        { links: ["Responsabilidade", "Trabalhe Conosco"] },
      ],
    },
  },
  {
    label: "Serviços",
    sub: "Da eficiência ao molde",
    mega: {
      columns: [
        { links: ["Injeção", "Try-Out", "Montagem"] },
        { links: ["Produção", "Produtos", "Ferramental"] },
        { links: ["Engenharia", "Automação"] },
      ],
    },
  },
  {
    label: "Aplicações",
    sub: "Setores atendidos",
    mega: {
      columns: [
        { links: ["Agrícola", "Automotivo", "Implementos Rodoviários"] },
        {
          links: ["Resistência mecânica", "Fadiga e Durabilidade", "Segurança"],
        },
        { links: ["Conforto", "Instrumentação", "Escoamento de Fluidos"] },
      ],
    },
  },
  {
    label: "Marco 3D",
    sub: "Impressão 3D",
  },
  {
    label: "Contato",
    sub: "Fale com a Apolo",
  },
];

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const solid = scrolled || openIndex !== null;
  const active = openIndex !== null ? NAV[openIndex] : null;
  return (
    <>
      <header
        className={`${styles.header} ${
          solid ? styles.solid : styles.transparent
        }`}
        onMouseLeave={() => setOpenIndex(null)}
      >
        <div className={styles.container}>
          <a href="/">
            <img
              src="/static/images/apolo.png"
              alt="Apolo"
              className={`${styles.logo} ${!solid ? styles.logoLight : ""}`}
            />
          </a>

          <nav className={styles.nav}>
            {NAV.map((item, index) => {
              const activeItem = openIndex === index;

              return (
                <button
                  key={item.label}
                  onMouseEnter={() => setOpenIndex(item.mega ? index : null)}
                  onClick={() =>
                    setOpenIndex(item.mega && !activeItem ? index : null)
                  }
                  className={`${styles.navButton} ${
                    solid ? styles.darkText : styles.lightText
                  }`}
                >
                  {item.label}

                  {activeItem && <span className={styles.activeLine}></span>}
                </button>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <button className={styles.buttonPrimary}>
              <MapIcon />
              Distribuidores
            </button>

            <button className={styles.iconButton}>
              <SearchIcon />
            </button>

            <button
              className={`${styles.language} ${
                !solid ? styles.languageLight : ""
              }`}
            >
              PT
            </button>

            <button
              className={styles.mobileButton}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {active?.mega && (
          <div className={styles.mega}>
            <div className={styles.megaContainer}>
              <div>
                <h3 className={styles.megaTitle}>{active.label}</h3>

                <p className={styles.megaSubtitle}>{active.sub}</p>
              </div>

              <div className={styles.columns}>
                {active.mega.columns.map((column, i) => (
                  <ul key={i} className={styles.list}>
                    {column.links.map((link) => (
                      <li key={link}>
                        <a href="#">
                          {link}
                          <ArrowIcon />
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <div className={styles.mobile}>
          <div className={styles.container}>
            <img src="/static/images/apolo.png" className={styles.logo} />

            <button onClick={() => setMobileOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          <div className={styles.mobileContent}>
            {NAV.map((item) => (
              <a key={item.label} href="#">
                {item.label}
              </a>
            ))}

            <button className={styles.buttonPrimary}>
              <MapIcon />
              Distribuidores
            </button>
          </div>
        </div>
      )}
    </>
  );
}
