const Router = require("koa-router");

const products = new Router();
const productsCtrl = require("./products.controller");

products.post("/", productsCtrl.create);
products.get("/", productsCtrl.list);
products.delete("/:id", productsCtrl.delete);
products.patch("/:id", productsCtrl.update);

module.exports = products;
