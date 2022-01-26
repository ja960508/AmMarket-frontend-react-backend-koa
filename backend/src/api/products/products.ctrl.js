import Product from "../../models/product";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const checkOwnProduct = (ctx, next) => {
  // 로그인 한 유저가 작성자인지 확인
  const { user, product } = ctx.state;

  if (product.user._id.toString() !== user._id) {
    ctx.status = 403;

    return;
  }

  return next();
};

export const getProductById = async (ctx, next) => {
  // 포스트 아이디 확인 미들웨어
  const { id } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }

  try {
    const product = await Product.findById(id);

    if (!product) {
      // id와 매칭되는 포스트가 없을 때
      ctx.status = 404;
      return;
    }
    ctx.state.product = product;

    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const write = async (ctx) => {
  const { name, numOfProducts, productImage, price } = ctx.request.body;

  const product = new Product({
    name,
    numOfProducts,
    productImage,
    price,
    user: ctx.state.user,
  });

  try {
    await product.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = product._id;
};

export const list = async (ctx) => {
  const page = parseInt(ctx.query.page || "1", 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const products = await Product.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    const postCount = await Product.countDocuments().exec();
    ctx.set("Last-page", Math.ceil(postCount / 10));
    ctx.body = products;
  } catch (e) {
    return ctx.throw(500, e);
  }
};

export const remove = async (ctx) => {
  const { id } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }

  try {
    await Product.findByIdAndRemove(id).exec();
  } catch (e) {
    if (e.name === "CastError") {
      ctx.status = 400;
      return;
    }
  }

  ctx.status = 204;
};

export const update = async (ctx) => {
  const { id } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }

  let product;

  try {
    product = await Product.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = product;
};

export const read = (ctx) => {
  ctx.body = ctx.state.product;
};

export const buyProduct = async (ctx) => {
  const { id } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }

  let product;

  try {
    product = await Product.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = product;
};
