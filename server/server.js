"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var express_1 = require("express");
var cors_1 = require("cors");
var mongoose_1 = require("mongoose");
var router_1 = require("./routes/router");
var cookie_parser_1 = require("cookie-parser");
var errorMiddleware_1 = require("./middlewares/errorMiddleware");
var socket_server_1 = require("./socket-server");
var port = process.env.PORT || 5000;
var app = (0, express_1.default)();
(0, socket_server_1.default)(app);
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(router_1.default);
app.use(errorMiddleware_1.default);
var mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
if (process.env.DB_URL) {
    mongoose_1.default
        .connect(process.env.DB_URL, mongooseOptions)
        .then(function () {
        app.listen(process.env.DB_PORT, function () {
            console.log("DB is running on port ".concat(process.env.DB_PORT));
        });
    })
        .catch(function (error) {
        console.error("Error connecting to the database:", error);
    });
}
else {
    console.error("DB_URL environment variable is not defined.");
}
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
