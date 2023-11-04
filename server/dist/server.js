"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./routes/router"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
const socket_server_1 = __importDefault(require("./socket-server"));
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
(0, socket_server_1.default)(app);
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(router_1.default);
app.use(errorMiddleware_1.default);
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
if (process.env.DB_URL) {
    mongoose_1.default
        .connect(process.env.DB_URL, mongooseOptions)
        .then(() => {
        app.listen(process.env.DB_PORT, () => {
            console.log(`DB is running on port ${process.env.DB_PORT}`);
        });
    })
        .catch((error) => {
        console.error("Error connecting to the database:", error);
    });
}
else {
    console.error("DB_URL environment variable is not defined.");
}
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
