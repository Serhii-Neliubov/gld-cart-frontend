const userService = require("../services/user-service");
const mailService = require("../services/mail-service");
const uuid = require("uuid");
const maxAge = 30 * 24 * 60 * 60 * 1000;
module.exports.signup_post = async (req, res, next) => {
  const { type, name, surname, email, password } = req.body;

  try {
    const userData = await userService.registration(
      type,
      name,
      surname,
      email,
      password
    );

    res.cookie("refreshToken", userData.refreshToken, {
      httpOnly: true,
      maxAge: maxAge,
    });

    res.status(201).json(userData);
  } catch (error) {
    next(error);
  }
};

module.exports.login_post = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userData = await userService.login(email, password);

    res.cookie("refreshToken", userData.refreshToken, {
      httpOnly: true,
      maxAge: maxAge,
    });

    res.status(201).json(userData);
  } catch (error) {
    next(error);
  }
};

module.exports.logout_post = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const token = await userService.logout(refreshToken);
    res.clearCookie("refreshToken");
    return res.json(token);
  } catch (e) {
    next(e);
  }
};
module.exports.initiate_password_reset = async (req, res, next) => {
  const { email } = req.body;
  try {
    const token = uuid.v4();
    await userService.requestPasswordReset(email, token);
    res
      .status(200)
      .json({ message: "Password reset link was sent to your email." });
  } catch (error) {
    next(error);
  }
};
module.exports.reset_password = async (req, res, next) => {
  const { token } = req.params;
  console.log(token);
  const { newPassword } = req.body;
  console.log(newPassword);
  try {
    await userService.changePassword(token, newPassword);
    res.status(200).json({ message: "Password was reset successfully." });
  } catch (error) {
    next(error);
  }
};

module.exports.refresh_get = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = await userService.refresh(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      httpOnly: true,
      maxAge: maxAge,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};

module.exports.userData_get = async (req, res, next) => {
  try {
    const userData = await userService.getData();
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};
module.exports.send_password_email = async (req, res, next) => {
  const { email } = req.body;
  try {
    await userService.requestPasswordReset(email);
    res.status(200).json({
      success: true,
      message: "Reset password email was sent successfully",
    });
  } catch (error) {
    next(error);
  }
};
module.exports.send_contact_email = async (req, res, next) => {
  const { name, email, subject, message, to } = req.body;
  try {
    await mailService.sendContactMail(name, email, subject, message, to);
    res
      .status(200)
      .json({ success: true, message: "Email was sent successfully" });
  } catch (e) {
    res.status(500).json({ success: false, message: "Email was not sent" });
    next(e);
  }
};
module.exports.delete_all = async (res, next) => {
  try {
    const userData = await userService.deleteData();
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};
