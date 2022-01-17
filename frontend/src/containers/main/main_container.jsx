import React from "react";
import { useSelector } from "react-redux";
import Main from "../../components/main/main";

const MainContainer = () => {
  const { products } = useSelector(({ products }) => ({
    products: products.products,
  }));

  console.log(products);

  return <Main products={products} />;
};

export default MainContainer;
