import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../components/main/main";
import { getProductList } from "../../modules/products";

const MainContainer = () => {
  const { products } = useSelector(({ products }) => ({
    products: products.products,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return <Main products={products} />;
};

export default MainContainer;
