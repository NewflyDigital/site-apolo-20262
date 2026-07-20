import Link from "next/link";
import styles from "../styles/Rodape.module.css";

const FOOTER = {
  servicos: ["Injeção", "Try-Out", "Montagem", "Produção"],
  aplicacoes: ["Agrícola", "Automotivo", "Implementos Rodoviários", "Marco 3D"],
  institucional: ["A Empresa", "Grupo Marcopolo", "ISO 9001", "ISO 14001"],
  contato: ["Fale Conosco", "Trabalhe Conosco", "Localização", "Suporte"],
};

function FooterCol({ title, links }) {
  return (
    <div>
      <h5>{title}</h5>

      <ul>
        {links.map((item) => (
          <li key={item}>
            <Link href="#">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.left}>
            <img
              src="/static/images/Logo-Horizontal-branco.png"
              alt="Apolo"
              className={styles.logo}
            />

            <h2>Injeção de peças com tecnologia e inovação.</h2>

            <div className={styles.newsletter}>
              <input type="email" placeholder="Seu e-mail corporativo" />

              <button>
                Assinar
                <img src="/static/images/flecha.png" alt="" />
              </button>
            </div>
          </div>

          <div className={styles.right}>
            <FooterCol title="Serviços" links={FOOTER.servicos} />

            <FooterCol title="Aplicações" links={FOOTER.aplicacoes} />

            <FooterCol title="Institucional" links={FOOTER.institucional} />

            <FooterCol title="Contato" links={FOOTER.contato} />
          </div>
        </div>

        <div className={styles.middle}>
          <p>© 2026 APOLO TECNOLOGIA • UMA EMPRESA DO GRUPO MARCOPOLO</p>

          <div className={styles.social}>
            <a href="#">
              <img src="/linkedin-branco.png" alt="" />
            </a>

            <a href="#">
              <img src="/facebook-branco.png" alt="" />
            </a>

            <a href="#">
              <img src="/instagram-branco.png" alt="" />
            </a>
          </div>

          <div className={styles.links}>
            <Link href="#">Privacidade</Link>
            <Link href="#">Termos</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>Desenvolvido por</span>

          <a href="https://newfly.com.br" target="_blank" rel="noreferrer">
            <img src="/static/images/newfly-branco.png" alt="Newfly" />
          </a>
        </div>
      </div>
    </footer>
  );
}
