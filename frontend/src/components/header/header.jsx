import React from "react";
import styles from "./header.module.css";

const Header = ({ user, onLogin, onLogout, onRegister, onPost }) => {
  return (
    <header className={styles.header}>
      <span className={styles.title}>Am Market</span>
      <div className={styles.btnContainer}>
        {user ? (
          <button onClick={onLogout} className={styles.headerBtn}>
            로그아웃
          </button>
        ) : (
          <button onClick={onLogin} className={styles.headerBtn}>
            로그인
          </button>
        )}
        {user ? (
          <button onClick={onPost} className={styles.headerBtn}>
            상품 등록
          </button>
        ) : (
          <button onClick={onRegister} className={styles.headerBtn}>
            회원가입
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
