import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Main from "../../components/main/main";
import { getProductList } from "../../modules/products";

const MainContainer = () => {
  const { products } = useSelector(({ products }) => ({
    products: products.products,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onProductClick = (item) => {
    navigate(`/${item._id}`);
  };

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return <Main products={products} onProductClick={onProductClick} />;
};

export default MainContainer;
