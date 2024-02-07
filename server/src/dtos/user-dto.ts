import {IUser} from "../models/User";
class UserDto {
    id: string;
    type: string;
    name: string;
    surname: string;
    email: string;

    constructor(model: IUser) {
        this.id = model._id;
        this.type = model.type;
        this.name = model.name;
        this.surname = model.surname;
        this.email = model.email;
    }
}

export default UserDto;
