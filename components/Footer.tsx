import styles from "../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_wrapper}>
        <div>
          <ul className={styles.footer_lists}>
            <li>About</li>
            <li>Project</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul className={styles.footer_lists}>
            <li>Linked In</li>
            <li>GitHub</li>
            <li>Hashnode</li>
          </ul>
        </div>
        <div className={styles.email_boxes}>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="Text" />
        </div>
      </div>
    </footer>
  );
};
