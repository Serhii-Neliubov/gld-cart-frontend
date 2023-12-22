import {Server, Socket}                     from "socket.io";
import chatService                          from "./services/chatService";
import {createServer, Server as HttpServer} from "http";
import {Express}                            from "express";

export default function setupSocket(app: Express) {
    const server: HttpServer = createServer(app);
    const io = new Server(server);

    const chatNamespace = io.of("/chat");

    const onlineUsers = new Map<string, string>();

    chatNamespace.on("connection", async (socket: Socket) => {
        socket.on("add-user", async (userId: string) => {
            onlineUsers.set(userId, socket.id);
        });

        socket.on(
            "receive-message",
            async (msg: { text: string; sender: string; recipient: string }) => {
                try {
                    const recipient = onlineUsers.get(msg.recipient);
                    if (recipient) {
                        await chatService.createMessage(
                            msg.text,
                            msg.sender,
                            msg.recipient
                        );
                        socket.to(recipient).emit("msg-receive", msg);
                    }
                } catch (error) {
                    // TODO: handle the failure
                }
            }
        );

        // socket.on("get-message-history", async (msg: { sender: string, recipient: string }) => {
        //   try {
        //     await chatService.getAllMessages(msg.sender, msg.recipient);
        //   } catch (error) {
        //     // TODO: handle the failure
        //   }
        // });
    });
}
