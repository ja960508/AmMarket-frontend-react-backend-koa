import React from "react";
import { useRef } from "react";
import styles from "./post.module.css";

const Post = ({ onSubmit }) => {
  const fileRef = useRef();
  const nameRef = useRef();
  const numOfProductsRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const onImageClick = () => {
    fileRef.current.click();
  };

  const setImagePreview = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = () => {
      imageRef.current.src = reader.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(e) =>
          onSubmit(
            e,
            fileRef.current.files[0],
            nameRef.current.value,
            numOfProductsRef.current.value,
            priceRef.current.value
          )
        }
      >
        <div className={styles.imageContainer}>
          <img
            src='/images/image_picture_icon.png'
            alt='preview'
            className={styles.imagePreview}
            onClick={onImageClick}
            ref={imageRef}
          />
          <input
            ref={fileRef}
            type='file'
            name='productImage'
            id='productImage'
            className={styles.fileInput}
            accept='image/*'
            onChange={setImagePreview}
          />
        </div>
        <div className={styles.infoContainer}>
          <label htmlFor='name'>제품명</label>
          <input ref={nameRef} type='text' name='name' id='name' />
          <label htmlFor='numOfProducts'>제품 개수</label>
          <input
            ref={numOfProductsRef}
            type='number'
            name='numOfProducts'
            id='numOfProducts'
          />
          <label htmlFor='price'>제품 가격</label>
          <input ref={priceRef} type='number' name='price' id='price' />
          <button type='submit' className={styles.submitBtn}>
            제품 등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
