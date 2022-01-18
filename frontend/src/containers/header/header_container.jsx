import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import { logout } from "../../modules/auth";

const HeaderContainer = () => {
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return <Header user={user} onLogin={onLogin} onLogout={onLogout} />;
};

export default HeaderContainer;
