"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDto {
    constructor(model) {
        this.id = model._id;
        this.type = model.type;
        this.name = model.name;
        this.surname = model.surname;
        this.email = model.email;
    }
}
exports.default = UserDto;
