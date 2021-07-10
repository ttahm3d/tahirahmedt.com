import styles from "../styles/Projects.module.scss";

const Projects: React.FC = () => {
  return (
    <>
      <main className="main-container">
        <div className="hero-container">
          <h1>/projects</h1>
        </div>
      </main>
      <div className={styles.container}>
        <p>Projects</p>
      </div>
    </>
  );
};

export default Projects;
