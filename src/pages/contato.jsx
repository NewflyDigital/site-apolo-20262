import * as React from "react";
import Link from "next/link";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/Contato.module.css";

import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#28B3C7",
    },
  },
});

export default function Contato() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [setor, setSetor] = React.useState("");
  const [empresa, setEmpresa] = React.useState("");
  const [objetivo, setObjetivo] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [showAlertSuccess, setShowAlertSuccess] = React.useState(false);
  const [showAlertDanger, setShowAlertDanger] = React.useState(false);
  const [error, setError] = React.useState({});
  const [disableButton, setDisableButton] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newError = {};

    if (!nome) newError.nome = true;
    if (!telefone) newError.telefone = true;
    if (!email) newError.email = true;
    if (!objetivo) newError.objetivo = true;

    if (Object.keys(newError).length > 0) {
      setError(newError);
      setDisableButton(false);
      return;
    }

    SendContato({
      nome,
      telefone,
      email,
      objetivo,
      empresa,
      mensagem,
    })
      .then(() => {
        setShowAlertSuccess(true);
      })
      .catch((err) => {
        console.error(err);
        setShowAlertDanger(true);
      })
      .finally(() => {
        setNome("");
        setEmail("");
        setSetor("");
        setEmpresa("");
        setMensagem("");
        setDisableButton(false);
      });
  };

  async function SendContato({ nome, email, objetivo, mensagem, telefone }) {
    const response = await fetch("/api/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        telefone,
        email,
        objetivo,
        mensagem,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro ao enviar");
    }

    return data;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Menu />

        {/* HERO */}

        <section className={styles.hero}>
          <video autoPlay muted loop playsInline className={styles.heroVideo}>
            <source src="/static/videos/contato.mp4" type="video/mp4" />
          </video>

          <div className={styles.overlay}></div>

          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroLeft}>
                <span className={styles.eyebrow}>— Contato</span>

                <h1>
                  Vamos desenvolver
                  <span> sua próxima solução.</span>
                </h1>

                <p>
                  Nossa equipe técnica está preparada para entender seu projeto,
                  indicar os melhores processos produtivos e transformar ideias
                  em soluções de alta performance para a indústria.
                </p>

                <div className={styles.heroButtons}>
                  <Link href="#formulario" className={styles.primaryButton}>
                    Solicitar orçamento
                  </Link>

                  <Link href="/empresa" className={styles.secondaryButton}>
                    Conheça a Apolo
                  </Link>
                </div>
              </div>

              <div className={styles.heroRight}>
                <div className={styles.contactCard}>
                  <img src="/static/images/telefone.png" />

                  <small>Telefone</small>

                  <h3>(54) 3268-8300</h3>

                  <p>Atendimento Comercial</p>
                </div>

                <div className={styles.contactCard}>
                  <img src="/static/images/email.png" />

                  <small>E-mail</small>

                  <h3>contato@apolotec.com.br</h3>

                  <p>Retorno rápido.</p>
                </div>

                <div className={styles.contactCard}>
                  <img src="/static/images/mapa.png" />

                  <small>Localização</small>

                  <h3>Farroupilha • RS</h3>

                  <p>Parque fabril de 5.000m².</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}

        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introGrid}>
              <div>
                <span className={styles.eyebrow}>
                  — Atendimento Especializado
                </span>

                <h2>
                  Desenvolvemos projetos para as indústrias mais exigentes.
                </h2>

                <p>
                  Atuamos lado a lado com nossos clientes desde a engenharia do
                  produto até a produção seriada, oferecendo tecnologia,
                  confiabilidade e capacidade produtiva para atender projetos de
                  pequeno, médio e grande porte.
                </p>
              </div>

              <div className={styles.introImage}>
                <img src="/static/images/global-campus.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FORMULÁRIO ================= */}

        <section id="formulario" className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <span className={styles.eyebrow}>
                  — Fale com nossos especialistas
                </span>

                <h2>Estamos prontos para atender seu projeto.</h2>

                <p>
                  Conte um pouco sobre sua necessidade. Nossa equipe comercial
                  analisará seu projeto e retornará com a melhor solução para
                  sua empresa.
                </p>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <h4>Telefone</h4>
                    <span>(54) 3268-8300</span>
                  </div>

                  <div className={styles.infoItem}>
                    <h4>WhatsApp</h4>
                    <span>(54) 9 9999-9999</span>
                  </div>

                  <div className={styles.infoItem}>
                    <h4>E-mail</h4>
                    <span>contato@apolotec.com.br</span>
                  </div>

                  <div className={styles.infoItem}>
                    <h4>Endereço</h4>
                    <span>Farroupilha • Rio Grande do Sul</span>
                  </div>
                </div>
              </div>

              <div className={styles.formCard}>
                <span className={styles.formTag}>Solicite um orçamento</span>

                <h3>Envie sua mensagem</h3>

                <form onSubmit={handleSubmit}>
                  <div className={styles.row}>
                    <TextField
                      value={nome}
                      label="Nome"
                      fullWidth
                      required
                      onChange={(e) => setNome(e.target.value)}
                    />

                    <TextField
                      value={telefone}
                      label="Telefone"
                      fullWidth
                      required
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </div>

                  <div className={styles.row}>
                    <TextField
                      value={email}
                      label="E-mail"
                      fullWidth
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                      value={empresa}
                      label="Empresa"
                      fullWidth
                      onChange={(e) => setEmpresa(e.target.value)}
                    />
                  </div>

                  <FormControl fullWidth className={styles.select}>
                    <InputLabel>Segmento</InputLabel>

                    <Select
                      value={objetivo}
                      label="Segmento"
                      onChange={(e) => setObjetivo(e.target.value)}
                    >
                      <MenuItem value="Agrícola">Agrícola</MenuItem>

                      <MenuItem value="Automotivo">Automotivo</MenuItem>

                      <MenuItem value="Implementos Rodoviários">
                        Implementos Rodoviários
                      </MenuItem>

                      <MenuItem value="Linha Branca">Linha Branca</MenuItem>

                      <MenuItem value="Outro">Outro segmento</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    value={mensagem}
                    label="Mensagem"
                    multiline
                    rows={6}
                    fullWidth
                    onChange={(e) => setMensagem(e.target.value)}
                    sx={{ marginTop: "24px" }}
                  />

                  <button type="submit" className={styles.submitButton}>
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}

        <section className={styles.cta}>
          <div className="container">
            <div className={styles.ctaBox}>
              <span className={styles.eyebrow}>— Atendimento Comercial</span>

              <h2>
                Vamos conversar sobre
                <span> seu próximo projeto.</span>
              </h2>

              <p>
                Nossa equipe está pronta para entender sua necessidade e
                desenvolver a melhor solução para sua empresa.
              </p>

              <div className={styles.ctaButtons}>
                <Link
                  href="https://wa.me/5554999999999"
                  className={styles.primary}
                >
                  Solicitar orçamento
                </Link>

                <Link href="/" className={styles.secondary}>
                  Conheça a Apolo
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Rodape />
        <Snackbar
          open={showAlertSuccess}
          autoHideDuration={6000}
          onClose={() => setShowAlertSuccess(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={() => setShowAlertSuccess(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Seu contato foi enviado com sucesso!
          </Alert>
        </Snackbar>
        <Snackbar
          open={showAlertDanger}
          autoHideDuration={6000}
          onClose={() => setShowAlertDanger(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={() => setShowAlertDanger(false)}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Não foi possível enviar o contato!
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </>
  );
}
