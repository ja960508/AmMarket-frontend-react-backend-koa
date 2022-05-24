// import { createAction, handleActions } from "redux-actions";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../lib/create_request_saga";
// import * as product from "../lib/api/product";
// import { call, put, takeLatest } from "redux-saga/effects";

// const initialState = {
//   products: [],
//   productsError: null,
//   readProduct: null,
//   readProductError: null,
//   productCount: 1,
//   buyProductError: null,
//   postProductError: null,
//   postedProduct: null,
//   lastPage: null,
//   editProductError: null,
//   deleteProductError: null,
// };

// const INIT_READ_PRODUCT = "products/INIT_READ_PRODUCT";
// const [GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE] =
//   createRequestActionTypes("products/GET_PRODUCT_LIST");
// const [READ_PRODUCT, READ_PRODUCT_SUCCESS, READ_PRODUCT_FAILURE] =
//   createRequestActionTypes("products/READ_PRODUCT");
// const [CHANGE_PRODUCT_COUNT] = "products/CHANGE_PRODUCT_COUNT";
// const [BUY_PRODUCT, BUY_PRODUCT_SUCCESS, BUY_PRODUCT_FAILURE] =
//   createRequestActionTypes("products/BUY_PRODUCT");
// const [POST_PRODUCT, POST_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE] =
//   createRequestActionTypes("products/POST_PRODUCT");
// const [EDIT_PRODUCT, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE] =
//   createRequestActionTypes("product/EDIT_PRODUCT");
// const [DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE] =
//   createRequestActionTypes("product/DELETE_PRODUCT");

// export const getProductList = createAction(GET_PRODUCT_LIST);
// export const readProduct = createAction(READ_PRODUCT);
// export const changeProductCount = createAction(
//   CHANGE_PRODUCT_COUNT,
//   (num) => num
// );
// export const initReadProduct = createAction(INIT_READ_PRODUCT);
// export const buyProduct = createAction(BUY_PRODUCT);
// export const postProduct = createAction(POST_PRODUCT);
// export const editProduct = createAction(EDIT_PRODUCT);
// export const deleteProduct = createAction(DELETE_PRODUCT);

// // const productListSaga = createRequestSaga(
// //   GET_PRODUCT_LIST,
// //   product.getProductList
// // );
// function* productListSaga(action) {
//   const SUCCESS = `products/GET_PRODUCT_LIST_SUCCESS`;
//   const FAILURE = `products/GET_PRODUCT_LIST_FAILURE`;
//   try {
//     const response = yield call(product.getProductList, action.payload);

//     yield put({
//       type: SUCCESS,
//       payload: {
//         products: response.data,
//         lastPage: response.headers["last-page"],
//       },
//     });
//   } catch (e) {
//     console.log(e);
//     yield put({
//       type: FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
// }

// const readProductSaga = createRequestSaga(READ_PRODUCT, product.readProduct);
// const buyProductSaga = createRequestSaga(BUY_PRODUCT, product.buyProduct);
// const postProductSaga = createRequestSaga(POST_PRODUCT, product.postProduct);
// const editProductSaga = createRequestSaga(EDIT_PRODUCT, product.editProduct);
// const deleteProductSaga = createRequestSaga(
//   DELETE_PRODUCT,
//   product.deleteProduct
// );

// export function* productSaga() {
//   yield takeLatest(GET_PRODUCT_LIST, productListSaga);
//   yield takeLatest(READ_PRODUCT, readProductSaga);
//   yield takeLatest(BUY_PRODUCT, buyProductSaga);
//   yield takeLatest(POST_PRODUCT, postProductSaga);
//   yield takeLatest(EDIT_PRODUCT, editProductSaga);
//   yield takeLatest(DELETE_PRODUCT, deleteProductSaga);
// }

// const products = handleActions(
//   {
//     [GET_PRODUCT_LIST_SUCCESS]: (state, { payload }) => {
//       return {
//         ...state,
//         products: payload.products,
//         lastPage: payload.lastPage,
//         productsError: null,
//       };
//     },
//     [GET_PRODUCT_LIST_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       productsError: error,
//     }),
//     [READ_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
//       ...state,
//       readProduct: product,
//     }),
//     [READ_PRODUCT_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       readProductError: error,
//     }),
//     [CHANGE_PRODUCT_COUNT]: (state, { payload: num }) => ({
//       ...state,
//       productCount: num,
//     }),
//     [BUY_PRODUCT_SUCCESS]: (state) => ({
//       ...state,
//     }),
//     [BUY_PRODUCT_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       buyProductError: error,
//     }),
//     [INIT_READ_PRODUCT]: (state) => ({
//       ...state,
//       readProduct: initialState.readProduct,
//     }),
//     [POST_PRODUCT_SUCCESS]: (state, { payload: id }) => ({
//       ...state,
//       postProductError: null,
//       postedProduct: id,
//     }),
//     [POST_PRODUCT_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       postProductError: error,
//     }),
//     [EDIT_PRODUCT_SUCCESS]: (state) => ({
//       ...state,
//       editProductError: null,
//     }),
//     [EDIT_PRODUCT_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       editProductError: error,
//     }),
//     [DELETE_PRODUCT_SUCCESS]: (state) => ({
//       ...state,
//       deleteProductError: null,
//     }),
//     [DELETE_PRODUCT_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       deleteProductError: error,
//     }),
//   },
//   initialState
// );

// export default products;
