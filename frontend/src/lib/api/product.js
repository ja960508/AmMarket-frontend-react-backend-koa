import client from "./client";

export const getProductList = (query) => {
  if (query) {
    return client.get(`/api/products/?page=${query}`);
  }

  return client.get("/api/products");
};
