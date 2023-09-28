module.exports = class UserDto {
    id;
    type;
    name;
    surname;
    email;
    constructor(model) {
        this.id = model._id;
        this.type = model.type;
        this.name = model.name;
        this.surname = model.surname;
        this.email = model.email;
    }
}