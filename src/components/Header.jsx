import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          Tenzin.ai
        </a>
        <ul className={styles.navLinks}>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#models">Models</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#cta" className={styles.btn}>
              Join Waitlist
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
