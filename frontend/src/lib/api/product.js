import client from "./client";

export const getProductList = (query) => {
  if (query) {
    return client.get(`/api/products/?page=${query}`);
  }

  return client.get("/api/products");
};

export const readProduct = (id) => {
  return client.get(`/api/products/${id}`);
};

export const buyProduct = ({ id, numOfProducts }) => {
  return client.post(`/api/products/buy/${id}`, { numOfProducts });
};

export const postProduct = (product) => {
  return client.post("/api/products", product);
};
