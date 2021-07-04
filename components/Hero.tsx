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
          I'm a frontend developer working as a Project Engineer at Wipro
          Limited. I love all things React and have hands on experience with
          Azure PaaS and Pivotal Cloud Foundry
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

      {/* <h1>Hey, I'm Tahir Ahmed</h1>
      <section>
        <p>
          I'm a software Engineer from India who loves to work with React and
          other technologies that form the react ecosystem. I also have
          experience working with Docker and Azure PaaS Services.
        </p>
        <p>
          I am currently working at Wipro Limited as a React Developer. I
          re-write codebases of applications for one of the Largest Banks in the
          World with React - Redux on the frontend.
        </p>
      </section>
      <section>
        <p>I aspire to become a fullstack developer.</p>
        <div>
          <p>
            Here are few things that I am currently learning / plan to learn
          </p>
          <ul>
            <li>NextJs - The Fullstack framework for React</li>
            <li>GraphQL - Intrested to know the Hype around it</li>
            <li>Web3 - Fullstack Ethereum</li>
            <li>Kubernetes</li>
          </ul>
        </div>
      </section>
      <section>
        <p>
          If I find time, I try to sneak in a game of chess between meetings or
          during work. I was a gamer before I became a software engineer. I
          still sometimes play Counter Strike 1.6, CS:GO, Dota2, Among US and
          Chess.
        </p>
      </section> */}
    </main>
  );
};

export default Hero;
