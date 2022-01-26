import Router from "koa-router";
import * as productsCtrl from "./products.ctrl";
import checkLoggedIn from "../../lib/checkLoggedIn";

const products = new Router();

products.post("/", checkLoggedIn, productsCtrl.write);
products.get("/", productsCtrl.list);
products.post("/buy/:id", checkLoggedIn, productsCtrl.buyProduct);

const product = new Router();
product.delete(
  "/",
  checkLoggedIn,
  productsCtrl.checkOwnProduct,
  productsCtrl.remove
);
product.patch(
  "/",
  checkLoggedIn,
  productsCtrl.checkOwnProduct,
  productsCtrl.update
);
product.get("/", productsCtrl.read);

products.use("/:id", productsCtrl.getProductById, product.routes());

export default products;
