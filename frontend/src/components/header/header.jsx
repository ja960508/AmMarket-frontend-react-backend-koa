import React from "react";
import styles from "./header.module.css";

const Header = ({ user, onLogin, onLogout }) => {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Am Market</span>
      {user ? (
        <button onClick={onLogout} className={styles.headerBtn}>
          로그아웃
        </button>
      ) : (
        <button onClick={onLogin} className={styles.headerBtn}>
          로그인
        </button>
      )}
    </header>
  );
};

export default Header;
