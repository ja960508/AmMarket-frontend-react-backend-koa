import React from "react";
import styles from "./main.module.css";
import HeaderContainer from "../../containers/header/header_container";

const Product = ({ item, onProductClick }) => {
  return (
    <li className={styles.item}>
      <img
        src={item.productImage}
        alt='productImage'
        className={styles.itemImage}
        onClick={() => onProductClick(item)}
      />
      <div className={styles.info}>
        <span className={styles.itemName} onClick={() => onProductClick(item)}>
          {item.name}
        </span>
        <span className={styles.numOfProducts}>
          {item.numOfProducts} 개 남음
        </span>
        <span className={styles.itemPrice}>{item.price}원</span>
      </div>
      <div className={styles.sellerInfo}>
        <span className={styles.seller}>{item.user.username}</span>
      </div>
    </li>
  );
};

const Main = ({ products, onProductClick }) => {
  return (
    <div className={styles.container}>
      <HeaderContainer />
      <main>
        <ul className={styles.list}>
          {products.map((item) => (
            <Product
              item={item}
              key={item.name}
              onProductClick={onProductClick}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Main;
