require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();
const api = require("./api");

const mongoose = require("mongoose");
const bodyParser = require("koa-bodyparser");
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
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log("server is listening to port", port);
});
