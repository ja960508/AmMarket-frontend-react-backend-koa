import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../components/auth/auth";
import { check, login, register } from "../../modules/auth";
import { useNavigate } from "react-router-dom";

const AuthContainer = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth, authError } = useSelector(({ auth }) => ({
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onSubmit = (e, id, password, passwordConfirm) => {
    e.preventDefault();
    if (type === "login") {
      dispatch(login({ username: id, password: password }));
    }

    if (type === "register") {
      if (passwordConfirm !== password) {
        return;
      }

      if (!(id && password && passwordConfirm)) {
        return;
      }
      dispatch(register({ username: id, password: password }));
    }
  };

  useEffect(() => {
    if (authError) {
      console.log("error");
    }

    if (auth) {
      console.log(auth);
      localStorage.setItem("auth", auth._id);
      dispatch(check());
      navigate("/");
    }
  }, [auth, authError, dispatch, navigate]);

  return <Auth type={type} onSubmit={onSubmit} />;
};

export default AuthContainer;
