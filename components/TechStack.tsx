import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiDocker,
  SiMicrosoftazure,
  SiNextDotJs,
  SiGraphql,
  SiKubernetes,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import styles from "../styles/TechStack.module.scss";

export const TechStack = () => {
  return (
    <section className={styles.ts_container}>
      <div className={styles.normal}>
        <p style={{ fontWeight: "bold" }}>A bit more about me</p>
        <p>
          I started as a dotnet developer and learnt React from the internet and
          later transitioned into a React Developer role. At my current
          employer, I'm rewriting codebases of one of the Largest Banks in the
          World with
          <span> React-Redux</span> or <span>React-ContextAPI</span> on the
          frontend.
        </p>
        <p>My work usually involves: </p>
        <ul className={styles.disc_list}>
          <li>Analysing the pages</li>
          <li>
            Working on creating the mockup as close to as the design
            specification
          </li>
          <li>Work with backend teams to integrate the APIs</li>
        </ul>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>Tech Stack:</p>
        <ul>
          <li>
            <SiReact fill="#61DBFB" title="React" />
          </li>
          <li>
            <SiJavascript fill="#f0db4f" title="Javascript" />
          </li>
          <li>
            <SiTypescript fill="#007acc" title="Typescript" />
          </li>
          <li>
            <FaSass fill="#cc6699" title="SASS" />
          </li>
          <li>
            <SiMicrosoftazure fill="#0080FF" title="Azure" />
          </li>
        </ul>
      </div>
      <div>
        <p>Apart from these I am also learning / having an eye for</p>
        <ul>
          <li>
            <SiDocker fill="#61DBFB" title="Docker" />
          </li>
          <li>
            <SiNextDotJs fill="#1a1d24" title="Next JS" />
          </li>
          <li>
            <SiGraphql fill="#cc6699" title="GraphQL" />
          </li>
          <li>
            <SiKubernetes fill="#007acc" title="Kubernetes" />
          </li>
        </ul>
      </div>
    </section>
  );
};
