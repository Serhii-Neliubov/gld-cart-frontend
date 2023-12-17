import $api from "../http";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse> {
    return $api.post("/login", { email, password });
  }

  static async paymentRedirect(
    userId: string,
    lookup_key: string
  ): Promise<AxiosResponse> {
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const body = $api.post(
      "/create-subscription-checkout",
      {
        userId,
        lookup_key,
      },
      { headers }
    );
    return body;
  }

  static async sendAddress(
    email: string,
    recipients_name: string,
    street_address: string,
    city: string,
    country: string,
    ZIP_code: number | undefined,
    phone_number: string
  ): Promise<AxiosResponse> {
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    return $api.post(
      "/add-address",
      {
        email,
        recipients_name,
        street_address,
        city,
        country,
        ZIP_code,
        phone_number,
      },
      { headers }
    );
  }

  static async getAddresses(id: string): Promise<AxiosResponse> {
    const token = localStorage.getItem("token");
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    return $api.get(`/get-addresses/${id}`, { headers });
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
