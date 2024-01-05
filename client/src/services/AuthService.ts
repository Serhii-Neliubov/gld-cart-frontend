import $api from "../lib/http.ts";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse> {
    return $api.post("/login", { email, password });
  }

  static async registration(
    type: string,
    name: string,
    surname: string,
    email: string,
    password: string
  ): Promise<AxiosResponse> {
    return $api.post("/signup", {
      name,
      password,
      type,
      surname,
      email,
    });
  }
  static async logout(): Promise<AxiosResponse<void>> {
    return $api.post("/logout");
  }
}
