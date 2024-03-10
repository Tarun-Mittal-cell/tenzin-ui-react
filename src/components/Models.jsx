import React from "react";
import styles from "./Models.module.css";

function Models() {
  return (
    <section id="models" className={styles.models}>
      <h2>Our AI Models</h2>
      <div className={styles.modelsGrid}>
        <div className={styles.model}>
          <h3>Sentience Synthesis AI (SSAI)</h3>
          <p>
            SSAI is a groundbreaking model that emulates human-like emotions and
            cognitive processes. By integrating deep learning, symbolic AI, and
            neuroscience-inspired approaches, SSAI achieves unparalleled AI
            interaction and understanding. It can engage in empathetic
            conversations, provide emotional support, and make decisions based
            on both logical and emotional considerations.
          </p>
        </div>
        <div className={styles.model}>
          <h3>Quantum-Enhanced Machine Learning (QEML)</h3>
          <p>
            QEML leverages the power of quantum computing to enhance machine
            learning capabilities. By utilizing quantum algorithms and quantum
            neural networks, QEML achieves exponential speedups in data
            processing and model training. It can handle complex datasets,
            optimize multi-objective problems, and discover patterns that are
            intractable for classical computing.
          </p>
        </div>
        {/* Add more models */}
      </div>
    </section>
  );
}

export default Models;
