import React from "react";
import styles from "./Hero.module.css";
import HeroAnimation from "./HeroAnimation";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Tenzin.ai - The Future of Artificial General Intelligence</h1>
        <p>
          Pioneering breakthroughs in AI with advanced models like SSAI, QEML,
          CDALS, PASE, and RTALM.
        </p>
        <a href="#cta" className={styles.btn}>
          Join the Waitlist
        </a>
      </div>
      <div className={styles.heroAnimation}>
        <HeroAnimation />
      </div>
    </section>
  );
}

export default Hero;
