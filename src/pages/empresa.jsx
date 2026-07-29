import { useEffect, useState } from "react";
import Link from "next/link";

import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Timeline from "../components/Home/Timeline";

import styles from "../styles/Empresa.module.css";

export default function Empresa() {
  const heroSlides = [
    "/static/images/global-campus.jpg",
    "/static/images/news-1.jpg",
    "/static/images/news-2.jpg",
    "/static/videos/apolo.mp4",
  ];

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((old) => (old + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Menu />

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={styles.eyebrow}>— Quem Somos</span>

              <h1>
                Soluções globais
                <br />
                com alto padrão
                <span> de acabamento, qualidade e desempenho.</span>
              </h1>

              <p>
                Qualidade, tecnologia e confiança são palavras que pautam todos
                os projetos desenvolvidos pela Apolo Tecnologia. Atuamos há mais
                de uma década oferecendo soluções completas em peças técnicas
                poliméricas para as principais indústrias do país.
              </p>

              <div className={styles.heroButtons}>
                <Link href="/contato" className={styles.primary}>
                  Fale conosco
                </Link>

                <a href="#quem-somos" className={styles.secondary}>
                  Conheça a empresa
                </a>
              </div>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.heroSlider}>
                {heroSlides.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.slide}
                    ${slide === index ? styles.active : ""}`}
                  >
                    {item.endsWith(".mp4") ? (
                      <video src={item} autoPlay muted loop playsInline />
                    ) : (
                      <img src={item} alt="" />
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.dots}>
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlide(index)}
                    className={slide === index ? styles.dotActive : styles.dot}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* QUEM SOMOS */}
      {/* ===================================================== */}

      <section id="a-empresa" className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <img
                src="/static/images/global-campus.jpg"
                alt="Apolo Tecnologia"
              />
            </div>

            <div className={styles.aboutContent}>
              <span className={styles.eyebrow}>— Nossa História</span>

              <h2>Tecnologia, inovação e qualidade em cada detalhe.</h2>

              <p>
                Soluções globais com alto padrão de acabamento, qualidade e
                desempenho.
              </p>

              <p>
                A Apolo Tecnologia atua no desenvolvimento e produção de peças
                técnicas em polímeros para aplicações industriais, oferecendo
                tecnologia de ponta, engenharia especializada e processos
                produtivos certificados.
              </p>

              <p>
                Nosso parque fabril reúne equipamentos modernos, automação
                industrial, equipes altamente qualificadas e rigorosos controles
                de qualidade, garantindo produtividade, precisão dimensional e
                excelente acabamento.
              </p>

              <div className={styles.aboutNumbers}>
                <div>
                  <strong>10+</strong>

                  <span>anos de operação</span>
                </div>

                <div>
                  <strong>1400T</strong>

                  <span>capacidade de fechamento</span>
                </div>

                <div>
                  <strong>5000m²</strong>

                  <span>parque fabril</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <a id="certificacoes" />
      <section className={styles.certifications}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>— Certificações</span>

            <h2>Excelência reconhecida internacionalmente.</h2>

            <p>
              Na Apolo, nosso compromisso com a excelência e a melhoria contínua
              é refletido em nossas certificações e iniciativas que garantem os
              mais altos padrões em nossos serviços, processos e operações.
            </p>
          </div>

          <div className={styles.certSlider}>
            <article className={styles.certCard}>
              <div className={styles.certImage}>
                <img src="/static/images/iso9001.png" alt="ISO 9001" />
              </div>

              <div className={styles.certContent}>
                <span>Certificação</span>

                <h3>ISO 9001</h3>

                <p>
                  Norma internacional que estabelece requisitos para um Sistema
                  de Gestão da Qualidade, assegurando produtos e serviços que
                  atendem às expectativas dos clientes e às regulamentações
                  aplicáveis.
                </p>

                <a
                  href="/static/pdf/ISO9001.pdf"
                  target="_blank"
                  className={styles.download}
                >
                  Download certificado
                </a>
              </div>
            </article>

            <article className={styles.certCard}>
              <div className={styles.certImage}>
                <img src="/static/images/iso14001.png" alt="ISO 14001" />
              </div>

              <div className={styles.certContent}>
                <span>Certificação</span>

                <h3>ISO 14001</h3>

                <p>
                  Sistema de Gestão Ambiental que auxilia empresas a gerenciar
                  impactos ambientais, atender legislações e promover
                  sustentabilidade através da melhoria contínua.
                </p>

                <a
                  href="/static/pdf/ISO14001.pdf"
                  target="_blank"
                  className={styles.download}
                >
                  Download certificado
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* POLÍTICA */}
      {/* ===================================================== */}

      <a id="qualidade" />
      <a id="responsabilidade" />
      <section className={styles.policy}>
        <div className="container">
          <div className={styles.policyHeader}>
            <span className={styles.eyebrow}>
              — Política da Qualidade e Meio Ambiente
            </span>

            <h2>Qualidade e sustentabilidade fazem parte do nosso processo.</h2>
          </div>

          <div className={styles.policyContent}>
            <p>
              Atender os requisitos aplicáveis da organização com qualidade,
              mediante seleção e avaliação de fornecedores, capacitação dos
              colaboradores e monitoramento dos processos-chave, objetivando a
              satisfação mútua de nossos clientes e demais partes interessadas
              através da eficácia e melhoria contínua dos processos.
            </p>

            <p>
              A Apolo assegura seu compromisso com a sustentabilidade através do
              desempenho contínuo do Sistema de Gestão Ambiental, promovendo
              ações alinhadas aos valores da empresa e às melhores práticas
              industriais.
            </p>
          </div>

          <div className={styles.policyGrid}>
            <div className={styles.policyCard}>
              <h4>Legislação Ambiental</h4>

              <p>
                Atendimento integral às normas ambientais vigentes, instrumentos
                internacionais e requisitos legais aplicáveis ao Sistema de
                Gestão Ambiental.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h4>Preservação Ambiental</h4>

              <p>
                Proteção do meio ambiente por meio do uso racional dos recursos
                naturais, redução dos impactos ambientais e prevenção da
                poluição.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h4>Conscientização</h4>

              <p>
                Promoção constante de treinamentos, ações ambientais e
                desenvolvimento da cultura sustentável entre colaboradores e
                parceiros.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h4>Melhoria Contínua</h4>

              <p>
                Evolução permanente dos processos produtivos, buscando maior
                eficiência operacional, qualidade e desempenho ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO • VISÃO • VALORES */}
      {/* ===================================================== */}
      {/* MISSÃO • VISÃO • VALORES */}
      {/* ===================================================== */}

      <section className={styles.mvv}>
        <div className="container">
          <div className={styles.mvvGrid}>
            <div className={styles.mvvLeft}>
              <div className={styles.mvvImage}>
                <img
                  src="/static/images/global-campus.jpg"
                  alt="Apolo Tecnologia"
                />
              </div>

              <div className={styles.mvvSlider}>
                <div className={styles.mvvItem}>
                  <span className={styles.smallTag}>Missão</span>

                  <h3>Desenvolver soluções que impulsionam nossos clientes.</h3>

                  <p>
                    Buscar soluções em peças poliméricas através de processos
                    eficazes, visando o crescimento contínuo do negócio e
                    estabelecendo parcerias sólidas com clientes, fornecedores e
                    colaboradores.
                  </p>
                </div>

                <div className={styles.sliderDots}>
                  <span className={styles.activeDot}></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className={styles.mvvRight}>
              <article className={styles.infoBox}>
                <small>01</small>

                <h4>Fundado em 2014</h4>

                <p>
                  Mais de uma década desenvolvendo soluções em polímeros para os
                  principais segmentos industriais.
                </p>
              </article>

              <article className={styles.infoBox}>
                <small>02</small>

                <h4>Produção Mensal Atual de 65% da capacidade</h4>

                <p>
                  Estrutura preparada para ampliar rapidamente sua capacidade
                  produtiva conforme a demanda.
                </p>
              </article>

              <article className={styles.infoBox}>
                <small>03</small>

                <h4>Parque Fabril de 5.000m²</h4>

                <p>
                  Equipamentos modernos, processos automatizados e tecnologia
                  aplicada em todas as etapas produtivas.
                </p>
              </article>

              <article className={styles.infoBox}>
                <small>04</small>

                <h4>Farroupilha Rio Grande do Sul</h4>

                <p>
                  Localização estratégica para atender todo o Brasil com
                  agilidade e qualidade.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* VALORES */}
      {/* ===================================================== */}

      <a id="principios" />
      <section className={styles.values}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>— Valores</span>

            <h2>Os princípios que movem a Apolo.</h2>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              Respeito e valorização das pessoas
            </div>

            <div className={styles.valueCard}>Satisfação do cliente</div>

            <div className={styles.valueCard}>
              Fazer acontecer com excelência
            </div>

            <div className={styles.valueCard}>Ética e integridade</div>

            <div className={styles.valueCard}>Sustentabilidade</div>

            <div className={styles.valueCard}>Trabalho em equipe</div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* VÍDEO FULL WIDTH */}
      {/* ===================================================== */}

      <section className={styles.videoSection}>
        <video
          src="/static/videos/institucional.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.fullVideo}
        />

        <div className={styles.videoOverlay}></div>

        <div className={styles.videoContent}>
          <span className={styles.eyebrow}>— Apolo Tecnologia</span>

          <h2>Tecnologia, inovação e qualidade em movimento.</h2>
        </div>
      </section>

      <Timeline />
      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <span className={styles.eyebrow}>— Fale com nosso time</span>

            <h2>Desenvolvemos soluções sob medida para sua indústria.</h2>

            <p>
              Conte com a experiência da Apolo Tecnologia para transformar
              projetos em produtos com qualidade, inovação e alto desempenho.
            </p>

            <div
              className={`${styles.heroButtons} flex items-center justify-center`}
            >
              <Link href="/contato" className={styles.primary}>
                Solicitar orçamento
              </Link>

              <Link href="/servicos" className={styles.secondary}>
                Conheça nossos serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Rodape />
    </>
  );
}
