const Router = require("koa-router");

const api = new Router();
const products = require("./products");

api.use("/products", products.routes());

module.exports = api;
