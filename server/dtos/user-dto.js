"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserDto = /** @class */ (function () {
    function UserDto(model) {
        console.log('Debug: model', model);
        this.id = model._id;
        this.type = model.type;
        this.name = model.name;
        this.surname = model.surname;
        this.email = model.email;
    }
    return UserDto;
}());
exports.default = UserDto;
