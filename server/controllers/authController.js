const userService = require('../services/user-service');
const maxRefreshTokenAge = 30 * 24 * 60 * 60 * 1000;

module.exports.signup_post = async (req, res, next) => {

  const { type, name, surname, email, password } = req.body;

  try {

    const userData = await userService.registration(type, name, surname, email, password);

    res.cookie('refreshToken', userData.refreshToken, { httpOnly: true, maxAge: maxRefreshTokenAge });

    res.status(201).json(userData);

  } catch (error) {
    next(error);
  }
}

module.exports.login_post = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userData = await userService.login(email, password);

    res.cookie('refreshToken', userData.refreshToken, { httpOnly: true, maxAge: maxRefreshTokenAge });

    res.status(201).json(userData);
  } catch (error) {
    next(error);

  }
}

module.exports.logout_post = async (req, res, next) => {
  try {
    const{refreshToken} = req.cookies;
    const token = await userService.logout(refreshToken);
    res.clearCookie('refreshToken');
    return res.json(token);
  }
  catch (e) {
    next(e);
  }
}
module.exports.refresh_get = async(req, res, next) =>
{
  try {
    const{refreshToken} = req.cookies;
    const userData = await userService.refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, { httpOnly: true, maxAge: maxRefreshTokenAge });
    return res.json(userData);
  }
  catch (e) {
    next(e);
  }
}

module.exports.userData_get = async(req, res, next) => {
  try {
    const userData = await userService.getData();
    return res.json(userData);
  }
  catch(e)
  {
    next(e);
  }
}
module.exports.delete_all = async(req, res, next) => {
  try {
  const userData = await userService.deleteData();
  return res.json(userData);
  }
  catch (e) {
   next(e);
  }

}