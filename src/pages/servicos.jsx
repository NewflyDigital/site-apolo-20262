import { useState } from "react";
import Link from "next/link";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/Servicos.module.css";

const applications = [
  {
    title: "Agrícola",
    image: "/static/images/card-energy.jpg",
    items: [
      "Resistência mecânica",
      "Fadiga / Durabilidade",
      "Segurança",
      "Conforto",
      "Instrumentação",
      "Materiais",
      "Escoamento de fluidos líquidos e gases",
    ],
  },
  {
    title: "Automotivo",
    image: "/static/images/card-robotics.jpg",
    items: [
      "Resistência mecânica",
      "Fadiga / Durabilidade",
      "Segurança",
      "Conforto",
      "Instrumentação",
      "Materiais",
      "Escoamento de fluidos líquidos e gases",
    ],
  },
  {
    title: "Implementos Rodoviários",
    image: "/static/images/card-digital.jpg",
    items: [
      "Resistência mecânica",
      "Fadiga / Durabilidade",
      "Segurança",
      "Conforto",
      "Instrumentação",
      "Materiais",
      "Escoamentos",
    ],
  },
];

const services = [
  {
    title: "Injeção",
    image: "/static/images/servico-injecao.jpg",
    href: "/contato",
    description:
      "Com capacidade de fechamento de até impressionantes 1.400 toneladas, as nossas máquinas incorporam o que há de mais avançado em tecnologia. Cada uma das nossas injetoras é equipada com sistemas robotizados de última geração, responsáveis pela extração precisa das peças e pela otimização contínua do processo produtivo, elevando eficiência, qualidade e produtividade.",
  },
  {
    title: "Try-Out",
    image: "/static/images/servico-tryout.jpg",
    href: "/contato",
    description:
      "Nossas máquinas injetoras estão estrategicamente preparadas para atender uma ampla gama de tamanhos de matrizes. Contamos com uma equipe experiente e com profundo conhecimento em diferentes matérias-primas, permitindo validar moldes, processos e produtos com segurança, rapidez e elevado padrão técnico.",
  },
  {
    title: "Montagem",
    image: "/static/images/servico-montagem.jpg",
    href: "/contato",
    description:
      "Dispomos de profissionais altamente qualificados que oferecem suporte ao cliente desde o desenvolvimento até a implementação completa dos produtos. Todo o processo é conduzido seguindo rigorosos padrões de qualidade certificados pela ISO 9001, garantindo confiabilidade, precisão e excelência em cada etapa.",
  },
  {
    title: "Produção",
    image: "/static/images/servico-producao.jpg",
    href: "/contato",
    description:
      "Através de uma linha de produção moderna, automatizada e altamente otimizada, entregamos soluções para o segmento plástico com rapidez, flexibilidade e elevado controle de qualidade. Nossa estrutura permite atender diferentes demandas sem abrir mão da eficiência e da confiabilidade.",
  },
  {
    title: "Produtos",
    image: "/static/images/servico-produtos.jpg",
    href: "/contato",
    description:
      "Com tecnologia de ponta e uma estrutura industrial preparada para grandes volumes, produzimos peças técnicas para diversos segmentos industriais. Nossa flexibilidade permite atender projetos personalizados, mantendo sempre o compromisso com qualidade, inovação e desempenho.",
  },
];

export default function Servicos() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Menu />

      {/* HERO */}

      <section className={styles.hero}>
        <img
          src="/static/images/global-campus.jpg"
          className={styles.heroBg}
          alt=""
        />

        <div className={styles.overlay}></div>

        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={styles.eyebrow}>— Serviços / Aplicação</span>

              <h1>
                Serviços completos
                <br />
                <span>em peças.</span>
              </h1>

              <p>
                Qualidade, tecnologia e confiança são palavras que pautam a
                execução de todos os projetos da Apolo Tecnologia.
              </p>

              <div className={styles.heroButtons}>
                <Link href="#servicos" className={styles.primary}>
                  Conheça os serviços
                </Link>

                <Link href="/contato" className={styles.secondary}>
                  Solicitar orçamento
                </Link>
              </div>
            </div>

            <div className={styles.heroRight}>
              <span className={styles.smallTitle}>Aplicações</span>

              <div className={styles.slider}>
                <img
                  src={applications[active].image}
                  alt={applications[active].title}
                />

                <div className={styles.applicationCard}>
                  <h3>{applications[active].title}</h3>

                  <ul>
                    {applications[active].items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.dots}>
                {applications.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={active === index ? styles.dotActive : styles.dot}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className={styles.services}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <span className={styles.eyebrow}>— Serviços</span>

            <h2>Soluções completas para todas as etapas do seu projeto.</h2>

            <p>
              Da validação do molde até a produção seriada, a Apolo oferece
              estrutura, tecnologia e equipe especializada para entregar
              qualidade em cada processo.
            </p>
          </div>

          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <Link
                href={service.href}
                key={service.title}
                className={styles.serviceCard}
              >
                <div className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} />
                </div>

                <div className={styles.serviceContent}>
                  <span>{(index + 1).toString().padStart(2, "0")}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className={styles.serviceButton}>
                    <span>Acessar serviço</span>

                    <img src="/static/images/icone.png" alt="" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ================= VÍDEO INSTITUCIONAL ================= */}

      <section className={styles.videoSection}>
        <video autoPlay muted loop playsInline className={styles.video}>
          <source src="/static/videos/institucional.mp4" type="video/mp4" />
        </video>

        <div className={styles.videoOverlay}></div>

        <div className="container">
          <div className={styles.videoContent}>
            <span className={styles.eyebrow}>— Tecnologia em movimento</span>

            <h2>
              Qualidade, inovação e capacidade produtiva para atender grandes
              indústrias.
            </h2>

            <p>
              Conheça a estrutura da Apolo Tecnologia e descubra como
              transformamos projetos em soluções de alta performance.
            </p>

            <Link href="/contato" className={styles.primary}>
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>
      <Rodape />
    </>
  );
}
