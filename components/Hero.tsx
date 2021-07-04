import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styles from "../styles/Hero.module.scss";

const LinkContainer = ({ title, icon, link }) => {
  return (
    <div title={title}>
      <a href={link}>{icon}</a>
    </div>
  );
};

const Hero = () => {
  return (
    <main className="main-container">
      <div className={styles.hero_container}>
        <h1>Hi, I'm Tahir Ahmed 👋</h1>
        <p>
          I'm a <span>Frontend Developer</span> working as a Project Engineer at{" "}
          <span>Wipro Limited </span>. I love all things React and have hands on
          experience with Azure PaaS and Pivotal Cloud Foundry
        </p>
        <div className={styles.link_container}>
          <LinkContainer
            title="LinkedIn"
            link="https://www.linkedin.com/in/tahirahmedt/"
            icon={<AiFillLinkedin fill="#1890ff" />}
          />
          <LinkContainer
            title="GitHub"
            link="https://github.com/ttahm3d/"
            icon={<AiFillGithub fill="#333" />}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
