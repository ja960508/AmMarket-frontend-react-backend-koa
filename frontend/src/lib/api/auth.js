import client from "./client";

export const login = ({ username, password }) => {
  return client.post("/api/auth/login", { username, password });
};

export const register = ({ username, password }) => {
  return client.post("/api/auth/register", { username, password });
};

export const check = () => client.post("/api/auth/check");

export const logout = () => client.post("/api/auth/logout");
