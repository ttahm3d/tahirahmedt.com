import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <>
      <div className="main-container">
        <div className="hero-container">
          <h1>/about</h1>
        </div>
      </div>
      <div className={styles.container}>
        <p>
          I am a Software Engineer by Profession. I did my Bachelor's of
          Engineering in <span>Computer Science and Engineering</span> from{" "}
          <span>
            <a href="https://www.nmit.ac.in" target="_blank">
              Nitte Meenakshi Institute of Technology
            </a>
          </span>{" "}
          (2014 - 2018), Bengaluru. I started learning programming very early in
          my primary school (around class 7th) and I was fascinated by the way I
          could get something complex done while I just write some lines of
          code.
        </p>
        <p>
          I started working at Wipro Limited in July 2018, as a Dotnet
          Developer. I initially was migrating applications from their old
          technology and servers to new technology stack and servers. I learnt
          React from Internet, and transitioned into a React Developer role.
        </p>
        <p>In my current role, I perform the following activities</p>
        <ul>
          <li>
            Rewriting the frontend codebase of applications using React Redux
            and Context API
          </li>
          <li>
            Designed Wireframes and converted them to pixel perfect applications
          </li>
          <li>Actively participated in Application design discussions</li>
          <li>Implemented JWT authentication in the applcations</li>
          <li>Worked with the backed team to integrate the APIs</li>
          <li>Contributed to internal styling library</li>
        </ul>
        <p>
          Away from programing world, I follow <span>UFC</span> and{" "}
          <span>Formula 1</span> very closely. I have a keen interest in
          Esports. I used to play lot of{" "}
          <span>
            <a
              href="https://store.steampowered.com/app/10/CounterStrike/"
              target="_blank"
            >
              Counter Strike
            </a>
          </span>{" "}
          during childhood and that trasferred into love for{" "}
          <span>
            <a
              href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
              target="_blank"
            >
              Counter Strike : Global Offensive
            </a>
          </span>
          . I discovered{" "}
          <span>
            <a
              href="https://store.steampowered.com/app/570/Dota_2/"
              target="_blank"
            >
              Defense of the Ancient 2 (DotA-2)
            </a>
          </span>{" "}
          at the same time and became huge fan of the game and I follow its
          Esports scene quite closely
        </p>
      </div>
    </>
  );
};

export default About;
