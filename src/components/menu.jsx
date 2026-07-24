"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/Menu.module.css";

const NAV = [
  {
    label: "Institucional",
    href: "/empresa",
    sub: "Conheça a Apolo",
    mega: {
      columns: [
        {
          links: [
            { label: "A Empresa", href: "/empresa#a-empresa" },
            { label: "Grupo Marcopolo", href: "/empresa#grupo-marcopolo" },
            { label: "Missão e Valores", href: "/empresa#missao" },
          ],
        },
        {
          links: [
            {
              label: "Certificações ISO 9001",
              href: "/empresa#iso9001",
            },
            {
              label: "Certificações ISO 14001",
              href: "/empresa#iso14001",
            },
            {
              label: "Qualidade",
              href: "/empresa#qualidade",
            },
          ],
        },
        {
          links: [
            {
              label: "Responsabilidade",
              href: "/empresa#responsabilidade",
            },
            {
              label: "Trabalhe Conosco",
              href: "/empresa#trabalhe-conosco",
            },
          ],
        },
      ],
    },
  },

  {
    label: "Serviços",
    href: "/servicos",
    sub: "Da eficiência ao molde",
    mega: {
      columns: [
        {
          links: [
            { label: "Injeção", href: "/servicos#injecao" },
            { label: "Try-Out", href: "/servicos#tryout" },
            { label: "Montagem", href: "/servicos#montagem" },
          ],
        },
        {
          links: [
            { label: "Produção", href: "/servicos#producao" },
            { label: "Produtos", href: "/servicos#produtos" },
            { label: "Ferramental", href: "/servicos#ferramental" },
          ],
        },
        {
          links: [
            { label: "Engenharia", href: "/servicos#engenharia" },
            { label: "Automação", href: "/servicos#automacao" },
          ],
        },
      ],
    },
  },

  {
    label: "Aplicações",
    href: "/aplicacoes",
    sub: "Setores atendidos",
    mega: {
      columns: [
        {
          links: [
            { label: "Agrícola", href: "/aplicacoes#agricola" },
            { label: "Automotivo", href: "/aplicacoes#automotivo" },
            {
              label: "Implementos Rodoviários",
              href: "/aplicacoes#implementos",
            },
          ],
        },
        {
          links: [
            {
              label: "Resistência mecânica",
              href: "/aplicacoes#resistencia",
            },
            {
              label: "Fadiga e Durabilidade",
              href: "/aplicacoes#fadiga",
            },
            {
              label: "Segurança",
              href: "/aplicacoes#seguranca",
            },
          ],
        },
        {
          links: [
            {
              label: "Conforto",
              href: "/aplicacoes#conforto",
            },
            {
              label: "Instrumentação",
              href: "/aplicacoes#instrumentacao",
            },
            {
              label: "Escoamento de Fluidos",
              href: "/aplicacoes#escoamento",
            },
          ],
        },
      ],
    },
  },

  {
    label: "Marco 3D",
    href: "/marco-3d",
    sub: "Impressão 3D",
  },

  {
    label: "Contato",
    href: "/contato",
    sub: "Fale com a Apolo",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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
          solid ? styles.headerSolid : styles.headerTransparent
        }`}
        onMouseLeave={() => setOpenIndex(null)}
      >
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            <img
              src={
                solid
                  ? "/static/images/Logo-Horizontal.png"
                  : "/static/images/Logo-Horizontal-branco.png"
              }
              alt="Apolo"
              className={styles.logoImage}
            />
          </Link>
          <nav className={styles.desktopNav}>
            {NAV.map((item, index) => {
              const activeItem = openIndex === index;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${styles.navButton}
  ${solid ? styles.navSolid : styles.navTransparent}
  ${activeItem ? styles.navActive : ""}`}
                  onMouseEnter={() => {
                    if (item.mega) {
                      setOpenIndex(index);
                    } else {
                      setOpenIndex(null);
                    }
                  }}
                >
                  {item.label}

                  <span
                    className={`${styles.navLine} ${
                      activeItem ? styles.navLineActive : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <button className={styles.distributorsButton}>
              <img
                src="/static/images/location.png"
                alt=""
                className={styles.icon}
              />
              <span>Distribuidores</span>
            </button>
            {/*
            bOTÃO PROCURA
            <button className={styles.searchButton} aria-label="Buscar">
              <img
                src="/static/images/icone.png"
                alt=""
                className={styles.icon}
              />
            </button>

            BOTÃO PT-BR
            
            <button
              className={`${styles.languageButton} ${
                solid ? styles.languageDark : styles.languageLight
              }`}
            >
              <img
                src="/static/images/icone.png"
                alt=""
                className={styles.icon}
              />
              <span>PT</span>
            </button>
            */}

            <button
              className={`${styles.mobileButton} ${
                solid ? styles.mobileDark : styles.mobileLight
              }`}
              onClick={() => setMobileOpen(true)}
            >
              <img
                src="/static/images/icone.png"
                alt="Menu"
                className={styles.icon}
              />
            </button>
          </div>

          <AnimatePresence>
            {active?.mega && (
              <motion.div
                key={active.label}
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={styles.megaMenu}
              >
                <div className={`container ${styles.megaContainer}`}>
                  <div className={styles.megaLeft}>
                    <h3>{active.label}</h3>

                    <p>{active.sub}</p>

                    <Link href={active.href} className={styles.sectionLink}>
                      Ir para esta seção
                      <img
                        src="/static/images/icone.png"
                        alt=""
                        className={styles.arrowIcon}
                      />
                    </Link>
                  </div>

                  <div className={styles.megaRight}>
                    {active.mega.columns.map((column, columnIndex) => (
                      <ul key={columnIndex} className={styles.column}>
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} className={styles.megaLink}>
                              <span>{link.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div className={`container ${styles.mobileHeader}`}>
              <img
                src="/static/images/logo-apolo-dark.svg"
                alt="Apolo"
                className={styles.mobileLogo}
              />

              <button onClick={() => setMobileOpen(false)}>
                <img
                  src="/static/images/icone.png"
                  alt="Fechar"
                  className={styles.icon}
                />
              </button>
            </div>

            <motion.div
              className={`container ${styles.mobileContent}`}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <button className={styles.mobileDistributorButton}>
                <img
                  src="/static/images/icone.png"
                  alt=""
                  className={styles.icon}
                />
                <span>Distribuidores</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
