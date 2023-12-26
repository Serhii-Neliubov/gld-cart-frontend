import $api from "../lib";
import { AxiosResponse } from "axios";
import IUser from "../models/IUser";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse> {
    return $api.get<IUser[]>("/refresh");
  }
}
