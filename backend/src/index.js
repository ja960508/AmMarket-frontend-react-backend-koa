require("dotenv").config();
import Koa from "koa";
import Router from "koa-router";
import api from "./api";
import mongoose from "mongoose";
import bodyParser from "koa-bodyparser";
import jwtMiddleware from "./lib/jwtMiddleware";

const app = new Koa();
const router = new Router();

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then((response) => {
    console.log("successfully connected to mongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

const port = process.env.PORT || 4000;

router.use("/api", api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);
// router 적용 전 미들웨어 적용
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log("server is listening to port", port);
});
