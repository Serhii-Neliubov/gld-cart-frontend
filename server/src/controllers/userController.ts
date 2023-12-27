import {NextFunction, Request, Response} from "express";
import MailService from "../services/mailService";
import UserService from "../services/userService";
import TokenService from "../services/tokenService";
import {v4 as uuidv4} from "uuid";
import {GoogleOAuthService} from "../services/googleService";

export const signup = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const {type, name, surname, email, password} = req.body;
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
            maxAge: process.env.COOKIES_MAX_AGE as unknown as number,
        });

        res.status(201).json(userData);
    } catch (error) {
        next(error);
    }
};

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const {email, password} = req.body;
    try {
        const userData = await UserService.login(email, password);

        res.cookie("refreshToken", userData.refreshToken, {
            httpOnly: true,
            maxAge: process.env.COOKIES_MAX_AGE as unknown as number,
        });

        res.status(201).json(userData);
    } catch (error) {
        next(error);
    }
};

export const logout = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        const token = await UserService.logout(refreshToken);
        res.clearCookie("refreshToken");
        return res.json(token);
    } catch (e) {
        next(e);
    }
};

export const initiatePasswordReset = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {email} = req.body;
    try {
        const token: string = uuidv4();
        await UserService.requestPasswordReset(email, token);
        res
            .status(200)
            .json({message: "Password reset link was sent to your email."});
    } catch (error) {
        next(error);
    }
};

export const resetPasswordWithToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const {token: token} = req.params;
    const {newPassword} = req.body;
    try {
        await UserService.changePasswordWithToken(token, newPassword);
        res.status(200).json({message: "Password was reset successfully."});
    } catch (error) {
        next(error);
    }
};
export const resetPasswordWithEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const {email, oldPassword, newPassword} = req.body;
    try {
        await UserService.changePasswordWithEmail(email, oldPassword, newPassword);
        res.status(200).json({message: "Password was reset successfully."});
    } catch (error) {
        next(error);
    }
};

export const refresh = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const refreshToken = req.cookies.refreshToken as string;
        const userData = await UserService.refresh(refreshToken);
        res.cookie("refreshToken", userData.refreshToken, {
            httpOnly: true,
            maxAge: process.env.COOKIES_MAX_AGE as unknown as number,
        });
        return res.json(userData);
    } catch (error) {
        next(error);
    }
};
export const sendContactEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {name, email, subject, message, token} = req.body;
    try {
        const userData = token ? TokenService.validateAccessToken(token) : null;
        const recipientEmail = email || userData?.email;

        if (recipientEmail) {
            await MailService.sendContactMail(name, recipientEmail, subject, message);
            return res.json({success: true, message: "Email sent successfully"});
        }
        return res
            .status(400)
            .json({success: false, message: "Error. Email was not sent"});
    } catch (error) {
        next(error);
    }
};

export const googleOauthHandler = async (req: Request, res: Response) => {
    const code: string = req.query.code as string;
    const customParameter = req.query.state;
    try {
        const googleData = new GoogleOAuthService();
        const {id_token, access_token} = await googleData.getGoogleOAuthTokens({code});
        const googleUser = await googleData.getGoogleUser(id_token, access_token);

        if (!googleUser.verified_email) {
            return res.status(403).send("Google account is not verified");
        }
        const userData = await UserService.loginGoogleUser(
            code,
            customParameter as string,
            googleUser.name,
            googleUser.family_name,
            googleUser.email,
            googleUser.picture,
            process.env.USERS_AFTER_GOOGLE_PASSWORD as string
        );
        res.cookie("refreshToken", userData.refreshToken, {
            httpOnly: true,
            maxAge: process.env.COOKIES_MAX_AGE as unknown as number,
        });
        const redirectURL: string = `${process.env.CLIENT_URL}`;
        res.redirect(redirectURL);
    } catch (error) {
        return res.redirect(`${process.env.CLIENT_URL}/oauth/error`);
    }
};
export const updatePersonalDetails = async (req: Request, res: Response, next: NextFunction) => {
    const {id, name, surname, email, phone_number, address, BIO} = req.body;
    try {
        await UserService.updatePersonalDetails(id, email, name, surname, phone_number, address, BIO);
        res.status(200).json({message: 'User details updated successfully'});
    } catch (error) {
        next(error);
    }
};