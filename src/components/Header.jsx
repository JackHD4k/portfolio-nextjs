import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>JOEL RAMOS</h1>
        <h2>Desarrollador Web</h2>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li>
              <a href="#title">Sobre mí</a>
            </li>
            <li>
              <a href="#">Experiencia</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <a href="https://github.com/JackHD4k?tab=repositories" target="_blank">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="#">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </header>
  );
}
