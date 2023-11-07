import {
  getGoogleOAuthTokens,
  getGoogleUser,
} from "../services/google-service";
import TokenService from "../services/token-service";
import { Request, Response } from "express";
import UserService from "../services/user-service";
import UserDto from "../dtos/user-dto";
import { IUser } from "../models/User";
const maxAge: number = 30 * 24 * 60 * 60 * 1000;

export async function googleOauthHandler(req: Request, res: Response) {
  const code: string = req.query.code as string;
  const customParameter = req.query.state;
  try {
    const { id_token, access_token } = await getGoogleOAuthTokens({ code });

    const googleUser = await getGoogleUser({ id_token, access_token });
    console.log({ googleUser });

    if (!googleUser.verified_email) {
      return res.status(403).send("Google account is not verified");
    }
    const user: IUser = await UserService.findAndUpdateUser(customParameter, googleUser.name,
        googleUser.family_name, googleUser.email, googleUser.picture, "Hello biba");
    console.log({...user});

    const userDto: UserDto = new UserDto(user);
    console.log(userDto);

    const tokens = TokenService.createTokens({
      surname: userDto.surname,
      name: userDto.name,
      id: userDto.id,
      type: userDto.type,
      email: userDto.email,
    });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      maxAge: maxAge,
    });
    res.status(200).json({ ...tokens, user: userDto });
  } catch (error) {
    return res.redirect(`${process.env.CLIENT_URL}/oauth/error`);
  }
}
