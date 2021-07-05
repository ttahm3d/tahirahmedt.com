import styles from "../styles/Footer.module.scss";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div>
          <p>Navigation</p>
          <ul className={styles.footer_lists}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Project</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Other sites</p>
          <ul className={styles.footer_lists}>
            <li>
              <a href="https://www.linkedin.com/in/tahirahmedt" target="_blank">
                Linked In
              </a>
            </li>
            <li>
              <a href="https://github.com/ttahm3d" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://tahirahmedt.hashnode.dev/">Hashnode</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
