const mongoose = require("mongoose");
const { Schema } = mongoose;

const Product = new Schema({
  name: String,
  numOfProducts: Number,
  productImage: String,
  price: Number,
});

module.exports = mongoose.model("Product", Product);
