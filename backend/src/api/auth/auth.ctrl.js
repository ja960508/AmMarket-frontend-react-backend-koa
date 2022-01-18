import User from "../../models/user";

const setTokenInCookies = (ctx, user) => {
  const token = user.generateToken();
  ctx.cookies.set("access_token", token, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });
};

export const register = async (ctx) => {
  const { username, password } = ctx.request.body;

  if (!(username && password)) {
    ctx.status = 400;
    return;
  }

  try {
    const exists = await User.findByUsername(username);

    if (exists) {
      ctx.status = 409;
      return;
    }

    const user = new User({
      username,
    });
    await user.setPassword(password);
    await user.save();

    ctx.body = user.serialize();
    setTokenInCookies(ctx, user);
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  if (!(username && password)) {
    ctx.status = 401;
    return;
  }

  try {
    const user = await User.findByUsername(username);

    if (!user) {
      // 등록된 user가 없을 때
      ctx.status = 401;
      return;
    }

    const vaild = await user.checkPassword(password);

    if (!vaild) {
      // 비밀번호 틀렸을 때
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();
    setTokenInCookies(ctx, user);
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const check = async (ctx) => {
  const { user } = ctx.state;

  if (!user) {
    //로그인 아닐 때
    ctx.status = 401;
    return;
  }
  ctx.body = user;
};

export const logout = async (ctx) => {
  ctx.cookies.set("access_token");
  ctx.status = 204;
};
