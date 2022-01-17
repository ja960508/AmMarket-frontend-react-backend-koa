import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Am Market</span>
    </header>
  );
};

export default Header;
