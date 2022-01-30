import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "../../components/detail/detail";
import {
  buyProduct,
  changeProductCount,
  deleteProduct,
  initReadProduct,
  readProduct,
} from "../../modules/products";

const DetailContainer = () => {
  const productId = useParams().productId;
  const product = useSelector(({ products }) => products.readProduct);
  const user = useSelector(({ auth }) => auth.user);
  const productCount = useSelector(({ products }) => products.productCount);
  const dispatch = useDispatch();
  const authority = (user && user._id) === (product && product.user._id);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      buyProduct({
        id: productId,
        numOfProducts: product.numOfProducts - productCount,
      })
    );
    dispatch(changeProductCount(1));
    dispatch(readProduct(productId));
  };

  const onChange = (num) => {
    if (num <= 0) {
      num = 1;
    }

    if (num > product.numOfProducts) {
      num = product.numOfProducts;
    }

    dispatch(changeProductCount(Number(num)));
  };

  useEffect(() => {
    dispatch(readProduct(productId));

    return () => {
      dispatch(initReadProduct());
    };
  }, [dispatch, productId]);

  const onEdit = () => {
    navigate(`/post/${productId}`);
  };

  const onDelete = () => {
    console.log(productId);
    dispatch(deleteProduct(productId));
    navigate("/");
  };

  return (
    <Detail
      product={product}
      productCount={productCount}
      onSubmit={onSubmit}
      onChange={onChange}
      authority={authority}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default DetailContainer;
