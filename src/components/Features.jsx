import React from "react";
import styles from "./Features.module.css";

function Features() {
  return (
    <section id="features" className={styles.features}>
      <h2>Key Features</h2>
      <div className={styles.featuresGrid}>
        <div className={styles.feature}>
          <h3>Quantum-Enhanced Machine Learning</h3>
          <p>
            Harnessing the power of quantum computing, Tenzin.ai achieves
            unparalleled performance and efficiency in data processing and
            complex problem-solving. By integrating quantum algorithms and
            quantum neural networks, Tenzin.ai pushes the boundaries of what's
            possible in AI.
          </p>
        </div>
        <div className={styles.feature}>
          <h3>Emotional Intelligence</h3>
          <p>
            With the Sentience Synthesis AI (SSAI) model, Tenzin.ai demonstrates
            remarkable emotional intelligence and cognitive understanding. It
            can perceive, interpret, and respond to human emotions in a natural
            and empathetic manner, enabling more human-like interactions and
            relationships.
          </p>
        </div>
        {/* Add more features */}
      </div>
    </section>
  );
}

export default Features;
