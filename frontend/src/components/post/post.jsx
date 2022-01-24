import React from "react";
import styles from "./post.module.css";

const Post = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label for='name'>제품명</label>
        <input type='text' name='name' id='name' />
        <label for='numOfProducts'>제품 개수</label>
        <input type='number' name='numOfProducts' id='numOfProducts' />
        <label for='productImage'>제품 이미지</label>
        <input type='file' name='productImage' id='productImage' />
        <label for='price'>제품 가격</label>
        <input type='number' name='price' id='price' />
      </form>
    </div>
  );
};

export default Post;
