import * as React from "react";
import * as styles from "./index.module.css";

import ReactLogo from "../images/assets/react-logo.svg";
import SpringLogo from "../images/assets/spring-logo.svg";
import UnityLogo from "../images/assets/unity-logo.svg";
import GitHubLogo from "../images/assets/github-logo.svg";

import TechItem from "../components/TechItem";

const GITHUB_PROFILE_LINK = "https://github.com/fbeccaceci";

const HomePage = () => {
  const onGitHubPageClicked = () => {
    window.open(GITHUB_PROFILE_LINK);
  };

  return (
    <main>
      <title>Home page</title>
      <div className={styles.header}>
        <GitHubLogo
          className={styles.gitHubLogo}
          onClick={onGitHubPageClicked}
        />
        <div className={styles.headerContent}>
          <text className={styles.myName}>Hi my name is</text>
          <text className={styles.name}>Fabrizio Beccaceci.</text>
          <text className={styles.initialDescription}>
            I'm a Jr software engineer capable of building mobile apps, backend
            software and games, currently working as a freelancer.
          </text>
        </div>
      </div>
      <div className={styles.techBackground}>
        <div className={styles.techContainer}>
          <text className={styles.techSectionTitle}>
            Technologies i'm comfortable with.
          </text>

          <div className={styles.techDivider} />

          <TechItem
            title="React Native"
            IconComponent={
              <ReactLogo height={150} width={150} color="#323647" />
            }
            ContentComponent={
              <text>
                I can build performant cross-platform mobile apps using React
                and Redux.
                <br />
                I'm comfortable with JavaScript, TypeScript and when needed i
                can easily write native code in Java/Kotlin and Swift
              </text>
            }
          />

          <div className={styles.techDivider} />

          <TechItem
            title="Spring Boot"
            IconComponent={
              <SpringLogo height={150} width={150} color="#323647" />
            }
            ContentComponent={
              <text>
                This is my framework of choice for building backend software.
                <br />I have lot of experience building REST APIs and i can work
                with Docker and Kafka.
              </text>
            }
            isRight
          />

          <div className={styles.techDivider} />

          <TechItem
            title="Unity"
            IconComponent={
              <UnityLogo height={150} width={150} color="#323647" />
            }
            ContentComponent={
              <text>
                I can even build games and when i do it i love using Unity as my
                game engine,
                <br /> it allows me to build games extremely fast and make them
                run on a variety of devices. <br /> Till now i mainly built
                mobile games integrated with the device with capabilities like
                push notification and content sharing.
              </text>
            }
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <text className={styles.contactMe}>Contact me</text>
          <text className={styles.email}>fabrizio.beccaceci@gmail.com</text>
          <text className={styles.initialDescription}>
            Currently i'm looking for freelancing jobs, if you want to hire me
            or just talk feel free to reach me.
          </text>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
