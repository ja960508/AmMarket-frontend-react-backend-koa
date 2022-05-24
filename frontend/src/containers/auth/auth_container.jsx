import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../components/auth/auth";
import { check, login, register } from "../../modules/auth_toolkit";
import { useNavigate } from "react-router-dom";

const AuthContainer = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector(({ auth }) => ({
    user: auth.user,
    error: auth.error,
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
    if (error) {
      console.log("error");
    }

    if (user) {
      console.log(user);
      localStorage.setItem("user", user._id);
      dispatch(check());
      navigate("/");
    }
  }, [user, error, dispatch, navigate]);

  return <Auth type={type} onSubmit={onSubmit} />;
};

export default AuthContainer;
