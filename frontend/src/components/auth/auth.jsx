import React from "react";
import { useRef } from "react";
import styles from "./auth.module.css";

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const Auth = ({ type, onSubmit }) => {
  const idRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          if (type === "login") {
            onSubmit(e, idRef.current.value, passwordRef.current.value);
          }

          if (type === "register") {
            onSubmit(
              e,
              idRef.current.value,
              passwordRef.current.value,
              passwordConfirmRef.current.value
            );
          }
        }}
      >
        <span className={styles.formText}>{textMap[type]}</span>
        <div className={styles.formElement}>
          <label name='userId'>아이디</label>
          <input
            name='userId'
            placeholder='아이디를 입력하세요.'
            ref={idRef}
            autoComplete='username'
          />
        </div>
        <div className={styles.formElement}>
          <label name='userPassword'>비밀번호</label>
          <input
            name='userPassword'
            type='password'
            placeholder='비밀번호를 입력하세요.'
            ref={passwordRef}
            autoComplete='new-password'
          />
        </div>
        {type === "register" && (
          <div className={styles.formElement}>
            <label name='passwordConfirm'>비밀번호 확인</label>
            <input
              name='passwordConfirm'
              type='password'
              placeholder='비밀번호를 입력하세요.'
              ref={passwordConfirmRef}
              autoComplete='new-password'
            />
          </div>
        )}
        <button type='submit' className={styles.formBtn}>
          {textMap[type]}
        </button>
      </form>
    </div>
  );
};

export default Auth;
