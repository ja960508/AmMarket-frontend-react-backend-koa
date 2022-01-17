import { createAction, handleActions } from "redux-actions";

const PRODUCT_REGIST = "product/PRODUCT_REGIST";
const PRODUCT_REMOVE = "product/PRODUCT_REMOVE";
const PRODUCT_MODIFY = "product/PRODUCT_MODIFY";

export const productRegist = createAction(PRODUCT_REGIST);
export const productRrmove = createAction(PRODUCT_REMOVE);
export const productModify = createAction(PRODUCT_MODIFY);

const initialState = {
  products: [
    {
      name: "stock1",
      price: 3000,
      numOfProducts: 5,
      productImage: "123",
    },
    { name: "stock2", price: 3000, numOfProducts: 5, productImage: "123" },
  ],
};

const products = handleActions(
  {
    [PRODUCT_REGIST]: (state, payload) => {
      return {
        ...state,
      };
    },
    [PRODUCT_REMOVE]: (state, payload) => {
      return {
        ...state,
      };
    },
    [PRODUCT_MODIFY]: (state, payload) => {
      return {
        ...state,
      };
    },
  },
  initialState
);

export default products;
