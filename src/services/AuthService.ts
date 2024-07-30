import { AxiosResponse } from "axios";
import $api, {API_URL} from "@/utils/interceptors.ts";

export default class AuthService {

  static async login(email: string, password: string): Promise<AxiosResponse> {
    return $api.post("/auth/login", { email, password });
  }

  static getGoogleOAuthURL(userType: string = "Buyer") {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
      redirect_uri: `${API_URL}/tokens/oauth/google`,
      client_id:
          "779302160501-d6omdv1c2cdknj75b17epp22tc40u0eu.apps.googleusercontent.com",
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      state: userType,
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };

    const qs = new URLSearchParams(options);
    return `${rootUrl}?${qs.toString()}`;
  }

  static async registration(
    role: string,
    name: string,
    surname: string,
    email: string,
    password: string
  ): Promise<AxiosResponse> {
    return $api.post("/auth/register", {
      name,
      password,
      role,
      surname,
      email,
    });
  }
  static async logout(): Promise<AxiosResponse<void>> {
    return $api.post("/auth/logout");
  }
}
