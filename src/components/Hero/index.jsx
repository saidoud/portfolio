import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.title}>
          Hi, I am Said, Full Stack Web Developer
        </h1>
        <p className={styles.subTitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Button className={styles.button}>Get Started</Button>
      </Container>
      <img src="./assets/wave.svg" alt="svg wave background" />
    </section>
  );
}

export default Hero;
