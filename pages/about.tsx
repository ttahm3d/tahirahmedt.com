import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className="main-container">
      <div className={styles.container}>
        <h1>/about</h1>
        <p>
          I am a Software Engineer by Profession. I did my Bachelor's of
          Engineering in <span>Computer Science and Engineering</span> from{" "}
          <span>Nitte Meenakshi Institute of Technology</span> (2014 - 2018),
          Bengaluru. I started learning programming very early in my primary
          school (around class 7th) and I was fascinated by the way I could get
          something complex done while I just write some lines of code.
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
          I follow <span>UFC</span> and <span>Formula 1</span> very closely. My
          Saturday mornings start with Bruce Buffer's "IT's TIME" introductions
          and Sundays (on Race Weekends) usually end with Crofty's "And its
          Lights out and Away we go". These sport bring sort of competetiveness
          in me &mdash; to go out everyday as a new day to prove yourself that
          you are better than your yesterday.
        </p>
        <p>
          I have a keen interest in Esports. I used to follow CS:GO until
          Astralis and Liquid started sharing 1st places between them. I am a
          huge fan of DotA 2 and I follow its Esports scene quite closely
        </p>
      </div>
    </div>
  );
};

export default About;
