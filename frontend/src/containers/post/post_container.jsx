import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../../components/post/post";
import cloudinary from "../../modules/cloudinary";
import { editProduct, postProduct, readProduct } from "../../modules/products";

const PostContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector(({ products }) => products.readProduct);
  const params = useParams().productId;
  console.log(product);

  useEffect(() => {
    if (params) {
      dispatch(readProduct(params));
    }
  }, [params, dispatch]);

  const onEdit = async (e, file, name, numOfProducts, price) => {
    e.preventDefault();

    const url = file && (await cloudinary.uploadImage(file));
    const newProduct = {
      name,
      numOfProducts,
      ...(url && { productImage: url }),
      price,
    };

    dispatch(editProduct({ id: product._id, editedInfo: newProduct }));
    navigate("/");
  };

  const onSubmit = async (e, file, name, numOfProducts, price) => {
    e.preventDefault();

    if (!(file && name && numOfProducts && price)) {
      alert("모든 항목을 입력하세요.");

      return;
    }
    const url = await cloudinary.uploadImage(file);
    const product = {
      name,
      numOfProducts,
      productImage: url,
      price,
    };

    dispatch(postProduct(product));
    navigate("/");
  };
  return <Post onSubmit={product ? onEdit : onSubmit} product={product} />;
};

export default PostContainer;
