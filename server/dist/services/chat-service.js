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
const Message_1 = __importDefault(require("../models/Message"));
class ChatService {
    createMessage(text, sender, recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            const [newMessage] = yield Promise.all([Message_1.default.create({
                    text: text,
                    sender: sender,
                    receiver: recipient,
                })]);
            yield newMessage.save();
            return newMessage;
        });
    }
    getAllMessages(sender, recipient) {
        return __awaiter(this, void 0, void 0, function* () {
            const messages = yield Message_1.default.find({
                $or: [
                    { sender: sender, receiver: recipient },
                    { sender: recipient, receiver: sender },
                ],
            }).sort({ updatedAt: 1 });
            const typedMessages = messages;
            return typedMessages.map((msg) => ({
                myself: msg.sender.toString() === sender,
                message: msg.text,
            }));
        });
    }
}
exports.default = new ChatService();
