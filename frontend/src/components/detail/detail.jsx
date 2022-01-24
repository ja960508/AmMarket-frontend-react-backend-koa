import React from "react";
import styles from "./detail.module.css";

const Detail = ({ product, productCount, onSubmit, onChange }) => {
  return product ? (
    <div className={styles.container}>
      <img
        src={product.productImage}
        alt='productImage'
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <h3 className={styles.productPrice}>{product.price}원</h3>
        <h3 className={styles.numOfProducts}>
          잔여 {product.numOfProducts} 개
        </h3>
        <h4 className={styles.seller}>{product.user.username}</h4>
        <form className={styles.purchaseForm} onSubmit={(e) => onSubmit(e)}>
          <div className={styles.countContainer}>
            <button
              type='button'
              className={styles.minusBtn}
              onClick={() => onChange(productCount - 1)}
            >
              -
            </button>
            <input
              type='number'
              className={styles.productCount}
              min='0'
              max={product.numOfProducts}
              value={productCount}
              onChange={(e) => onChange(e.target.value)}
            />
            <button
              type='button'
              className={styles.plusBtn}
              onClick={() => onChange(productCount + 1)}
            >
              +
            </button>
          </div>
          <button type='submit' className={styles.submitBtn}>
            구매하기
          </button>
        </form>
      </div>
    </div>
  ) : (
    <span>loading</span>
  );
};

export default Detail;
