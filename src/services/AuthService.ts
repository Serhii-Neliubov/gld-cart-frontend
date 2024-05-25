import { AxiosResponse } from "axios";
import $api, {API_URL} from "@utils/interceptors.ts";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse> {
    return $api.post("/auth/login", { email, password });
  }

  static getGoogleOAuthURL() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
      redirect_uri: `${API_URL}/tokens/oauth/google`,
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      state: "Buyer",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };

    const qs = new URLSearchParams(options);
    return `${rootUrl}?${qs.toString()}`;
  }

  static async registration(
    type: string,
    name: string,
    surname: string,
    email: string,
    password: string
  ): Promise<AxiosResponse> {
    return $api.post("/auth/signup", {
      name,
      password,
      type,
      surname,
      email,
    });
  }
  static async logout(): Promise<AxiosResponse<void>> {
    return $api.post("/auth/logout");
  }
}
