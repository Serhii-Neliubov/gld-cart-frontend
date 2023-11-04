"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const chat_service_1 = __importDefault(require("./services/chat-service"));
const http_1 = require("http");
function setupSocket(app) {
    const server = (0, http_1.createServer)(app);
    const io = new socket_io_1.Server(server);
    const chatNamespace = io.of("/chat");
    const onlineUsers = new Map();
    chatNamespace.on("connection", (socket) => __awaiter(this, void 0, void 0, function* () {
        socket.on("add-user", (userId) => __awaiter(this, void 0, void 0, function* () {
            onlineUsers.set(userId, socket.id);
        }));
        socket.on("receive-message", (msg) => __awaiter(this, void 0, void 0, function* () {
            try {
                const recipient = onlineUsers.get(msg.recipient);
                if (recipient) {
                    yield chat_service_1.default.createMessage(msg.text, msg.sender, msg.recipient);
                    socket.to(recipient).emit("msg-receive", msg);
                }
            }
            catch (error) {
                // TODO: handle the failure
            }
        }));
        // socket.on("get-message-history", async (msg: { sender: string, recipient: string }) => {
        //   try {
        //     await chatService.getAllMessages(msg.sender, msg.recipient);
        //   } catch (error) {
        //     // TODO: handle the failure
        //   }
        // });
    }));
}
exports.default = setupSocket;
