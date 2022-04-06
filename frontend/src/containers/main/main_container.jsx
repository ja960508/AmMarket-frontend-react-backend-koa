import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Main from "../../components/main/main";
import { getProductList } from "../../modules/products";
import qs from "qs";

const MainContainer = () => {
  const { products } = useSelector(({ products }) => ({
    products: products.products,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onProductClick = (item) => {
    navigate(`/products/${item._id}`);
  };
  const page = qs.parse(useLocation().search, { ignoreQueryPrefix: true }).page;
  const test = "hello";

  useEffect(() => {
    if (page) {
      dispatch(getProductList(page));
    } else {
      dispatch(getProductList());
    }
  }, [dispatch, page]);

  return <Main products={products} onProductClick={onProductClick} />;
};

export default MainContainer;
