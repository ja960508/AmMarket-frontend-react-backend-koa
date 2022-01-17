const Product = require("../../models/product");
const ObjectId = require("mongoose").Types.ObjectId;

exports.create = async (ctx) => {
  const { name, numOfProducts, productImage, price } = ctx.request.body;

  const product = new Product({
    name,
    numOfProducts,
    productImage,
    price,
  });

  try {
    await product.save();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = product;
};

exports.list = async (ctx) => {
  let products;

  try {
    products = await Product.find().exec();
  } catch (e) {
    return ctx.throw(500, e);
  }

  ctx.body = products;
};

exports.delete = async (ctx) => {
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

exports.update = async (ctx) => {
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
