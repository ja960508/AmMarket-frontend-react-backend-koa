import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const User = new Schema({
  username: String,
  hashedPassword: String,
});

User.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

User.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);

  return result;
};

User.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;

  return data;
};

User.statics.findByUsername = async function (username) {
  return this.findOne({ username });
};

User.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "7d",
    }
  );

  return token;
};

export default mongoose.model("User", User);
