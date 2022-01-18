import mongoose, { Schema } from "mongoose";

const Product = new Schema({
  name: String,
  numOfProducts: Number,
  productImage: String,
  price: Number,
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

export default mongoose.model("Product", Product);
