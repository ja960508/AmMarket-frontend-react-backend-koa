import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth_toolkit";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
