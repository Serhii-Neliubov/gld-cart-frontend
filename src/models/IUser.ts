export default interface IUser {
  _id: string;
  role: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  profile_picture?: string;
}
