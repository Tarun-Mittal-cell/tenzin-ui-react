import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Octave-X and Tenzin.ai</h2>
      <div className={styles.aboutContent}>
        <div className={styles.founder}>
          <img src="tarun-mittal.jpg" alt="Tarun Mittal" />
          <h3>Tarun Mittal</h3>
          <p>CEO and Founder of Octave-X</p>
        </div>
        <div className={styles.companyInfo}>
          <p>
            Octave-X, led by visionary CEO and founder Tarun Mittal, is the
            driving force behind Tenzin.ai. With a mission to revolutionize
            Artificial General Intelligence, Octave-X has assembled a
            world-class team of AI pioneers, researchers, and engineers to
            develop groundbreaking technologies like SSAI, QEML, CDALS, PASE,
            and RTALM.
          </p>
          <p>
            At Octave-X, we believe in the transformative power of AI and its
            potential to solve humanity's greatest challenges. Our commitment to
            ethical development and responsible AI sets us apart, as we strive
            to create not just the most advanced AGI, but also one that benefits
            society as a whole.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
