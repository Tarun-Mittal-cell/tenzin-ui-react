import React from "react";
import styles from "./CTA.module.css";

function CTA() {
  return (
    <section id="cta" className={styles.cta}>
      <h2>Be Part of the AI Revolution</h2>
      <p>
        Sign up for our waitlist to get early access and updates on Tenzin.ai's
        development.
      </p>
      <form>
        <input type="email" placeholder="Your Email" required />
        <button type="submit" className={styles.btn}>
          Join Waitlist
        </button>
      </form>
    </section>
  );
}

export default CTA;
