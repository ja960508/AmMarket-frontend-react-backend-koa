import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "../../components/post/post";
import cloudinary from "../../modules/cloudinary";
import { postProduct } from "../../modules/products";

const PostContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  return <Post onSubmit={onSubmit} />;
};

export default PostContainer;
