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
exports.deleteMessage = exports.updateMessage = exports.getMessages = exports.createMessage = void 0;
const chat_service_1 = __importDefault(require("../services/chat-service")); // Import the ChatService from the correct path
const createMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { text, sender, receiver } = req.body;
    try {
        const newMessage = yield chat_service_1.default.createMessage(text, sender, receiver);
        res.status(201).json(newMessage);
    }
    catch (error) {
        next(error);
    }
});
exports.createMessage = createMessage;
const getMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const sender = req.params.user1Id;
    const receiver = req.params.user2Id;
    try {
        const messages = yield chat_service_1.default.getAllMessages(sender, receiver);
        res.status(200).json({ messages: messages });
    }
    catch (error) {
        next(error);
    }
});
exports.getMessages = getMessages;
const updateMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Add your update logic here
    }
    catch (error) {
        next(error);
    }
});
exports.updateMessage = updateMessage;
const deleteMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Add your delete logic here
    }
    catch (error) {
        next(error);
    }
});
exports.deleteMessage = deleteMessage;
