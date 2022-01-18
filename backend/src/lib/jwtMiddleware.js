import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/user";

const getNewToken = (id) => {
  const user = User.findById(id);

  return user.generateToken();
};

const jwtMiddleware = (ctx, next) => {
  const token = ctx.cookies.get("access_token");

  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // 토큰 복호화
    console.log(decoded);

    ctx.state.user = {
      _id: decoded._id,
      username: decoded.username,
    }; // 이후 미들웨어에서 사용하기 위함

    if (decoded.exp - mongoose.now() < 60 * 60 * 24 * 3.5) {
      // token 재발급
      const token = getNewToken(decoded._id);

      ctx.cookies.set("access_token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }

    return next();
  } catch (e) {
    return next();
  }
};

export default jwtMiddleware;
