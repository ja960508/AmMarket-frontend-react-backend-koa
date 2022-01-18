const checkLoggedIn = (ctx, next) => {
  // 유저 로그인인지 확인
  if (!ctx.state.user) {
    ctx.status = 401;
    return;
  }

  return next();
};

export default checkLoggedIn;
