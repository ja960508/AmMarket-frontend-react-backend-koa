import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import { logout } from "../../modules/auth_toolkit";

const HeaderContainer = () => {
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  const onRegister = () => {
    navigate("/register");
  };

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem("auth");
  };

  const onPost = () => {
    navigate("/post");
  };

  return (
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onRegister={onRegister}
      onPost={onPost}
    />
  );
};

export default HeaderContainer;
