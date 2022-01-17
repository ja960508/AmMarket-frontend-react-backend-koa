import React from "react";
import styles from "./main.module.css";
import HeaderContainer from "../../containers/header/header_container";

const Product = ({ item }) => {
  return <li>{item.name}</li>;
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
