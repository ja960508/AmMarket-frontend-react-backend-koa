// import { createAction, handleActions } from "redux-actions";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../lib/create_request_saga";
// import * as authAPI from "../lib/api/auth";
// import { takeLatest } from "redux-saga/effects";
// import { call } from "redux-saga/effects";

// const LOGOUT = "auth/logout";
// const [REGISTER, REGISTER_SUCCESS, REGISTER_FALIURE] =
//   createRequestActionTypes("auth/REGISTER");
// const [LOGIN, LOGIN_SUCCESS, LOGIN_FALIURE] =
//   createRequestActionTypes("auth/LOGIN");
// const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
//   createRequestActionTypes("auth/CHECK");

// export const check = createAction(CHECK);
// export const logout = createAction(LOGOUT);
// export const register = createAction(REGISTER, ({ username, password }) => {
//   return {
//     username,
//     password,
//   };
// });
// export const login = createAction(LOGIN, ({ username, password }) => {
//   return {
//     username,
//     password,
//   };
// });

// const checkSaga = createRequestSaga(CHECK, authAPI.check);
// const registerSaga = createRequestSaga(REGISTER, authAPI.register);
// const loginSaga = createRequestSaga(LOGIN, authAPI.login);

// function* logoutSaga() {
//   try {
//     yield call(authAPI.logout);
//   } catch (e) {
//     console.log(e);
//   }
// }

// export function* authSaga() {
//   yield takeLatest(REGISTER, registerSaga);
//   yield takeLatest(LOGIN, loginSaga);
//   yield takeLatest(CHECK, checkSaga);
//   yield takeLatest(LOGOUT, logoutSaga);
// }

// const initialState = {
//   auth: null,
//   authError: null,
//   user: null,
//   checkError: null,
// };

// const auth = handleActions(
//   {
//     [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
//       ...state,
//       authError: null,
//       auth: auth,
//     }),
//     [REGISTER_FALIURE]: (state, { payload: error }) => ({
//       ...state,
//       authError: error,
//     }),
//     [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
//       ...state,
//       auth: auth,
//       authError: null,
//     }),
//     [LOGIN_FALIURE]: (state, { payload: error }) => ({
//       ...state,
//       authError: error,
//     }),
//     [CHECK_SUCCESS]: (state, { payload: user }) => ({
//       ...state,
//       user: user,
//       checkError: null,
//     }),
//     [CHECK_FAILURE]: (state, { payload: error }) => ({
//       ...state,
//       checkError: error,
//     }),
//     [LOGOUT]: (state) => ({
//       ...state,
//       user: null,
//       auth: null,
//     }),
//   },
//   initialState
// );

// export default auth;
