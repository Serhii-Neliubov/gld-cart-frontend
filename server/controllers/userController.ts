import { Request, Response, NextFunction } from "express";
import MailService from "../services/mail-service";
import UserService from "../services/user-service";
import TokenService from "../services/token-service";
import uuid from "uuid";
const maxAge: number = 30 * 24 * 60 * 60 * 1000;

export const signup_post = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { type, name, surname, email, password } = req.body;

  try {
    const userData = await UserService.registration(
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

export const login_post = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    const userData = await UserService.login(email, password);

    res.cookie("refreshToken", userData.refreshToken, {
      httpOnly: true,
      maxAge: maxAge,
    });

    res.status(201).json(userData);
  } catch (error) {
    next(error);
  }
};

export const logout_post = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;
    const token = await UserService.logout(refreshToken);
    res.clearCookie("refreshToken");
    return res.json(token);
  } catch (e) {
    next(e);
  }
};

export const initiate_password_reset = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  try {
    const token = uuid.v4();
    await UserService.requestPasswordReset(email, token);
    res
      .status(200)
      .json({ message: "Password reset link was sent to your email." });
  } catch (error) {
    next(error);
  }
};

export const reset_password = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token: token } = req.params;
  const { newPassword } = req.body;
  try {
    await UserService.changePassword(token, newPassword);
    res.status(200).json({ message: "Password was reset successfully." });
  } catch (error) {
    next(error);
  }
};

export const refresh_get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.cookies;
    const userData = await UserService.refresh(refreshToken);
    res.cookie("refreshToken", userData.refreshToken, {
      httpOnly: true,
      maxAge: maxAge,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};
export const send_contact_email = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const { name, email, subject, message, token } = req.body;

  try {
    const userData = token ? TokenService.validateAccessToken(token) : null;
    const recipientEmail = email || (userData?.email);

    if (recipientEmail) {
      await MailService.sendContactMail(name, recipientEmail, subject, message);
      return res.json({ success: true, message: "Email sent successfully" });
    }

    return res.status(400).json({ success: false, message: "Error. Email was not sent" });
  } catch (e) {
    next(e);
  }
};

export const delete_all = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const [userData]: Awaited<void>[] = await Promise.all([
      UserService.deleteData(),
    ]);
    return res.json(userData);
  } catch (e) {
    next(e);
  }
};
