import React from "react";
import styles from "./main.module.css";
import HeaderContainer from "../../containers/header/header_container";

const Product = ({ item }) => {
  return (
    <li className={styles.item}>
      <img
        src={item.productImage}
        alt='productImage'
        className={styles.itemImage}
      />
      <div className={styles.info}>
        <span>{item.name}</span>
        <span>{item.price}원</span>
      </div>
    </li>
  );
};

const Main = ({ products }) => {
  return (
    <div className={styles.container}>
      <HeaderContainer />
      <main>
        <ul className={styles.list}>
          {products.map((item) => (
            <Product item={item} key={item.name} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Main;
