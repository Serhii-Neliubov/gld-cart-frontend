import style from "@pages/chat/Chat.module.scss";
import {CiFileOn} from "react-icons/ci";
import {BsPaperclip} from "react-icons/bs";
import {IoSend} from "react-icons/io5";
import React, {ChangeEvent, useEffect, useState} from "react";
import $api, {API_URL} from "@utils/interceptors.ts";
import {IChat} from "@pages/chat/ChatsList.tsx";
import {useParams} from "react-router-dom";
import {userDataSelector} from "@store/slices/userDataSlice.ts";
import {useSelector} from "react-redux";
import io from "socket.io-client";

interface File {
    url: string;
    name: string;
    originalName?: string;
}

interface Message {
    chatId: string;
    text?: string;
    files?: File[] | null;
    senderId: string;
    recipientId: string;
}

interface ChatWindowProps {
    findRecipientId: (chatId: string) => string;
    chats: IChat[];
    inputRef: React.RefObject<HTMLInputElement>;
    setSelectedChat: (chatId: string) => void;
    selectedChat: string | null;
}

export default function ChatWindow({findRecipientId, chats, inputRef, setSelectedChat, selectedChat}: ChatWindowProps) {
    const [messageInput, setMessageInput] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);

    const userId = useSelector(userDataSelector).id;
    const socket = io(`${API_URL}/chat`, { query: { userId } });
    const { recipientId: paramUserId } = useParams<{ recipientId: string }>();

    let fileInput: HTMLInputElement | null = null;

    const handleClick = () => {
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleFilesChange = async (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        const files = event.target.files;
        if (!files) return;

        const formData = new FormData();
        Array.from(files).forEach((file) => {
            formData.append("files", file);
        });

        try {
            const files = await $api.post(`${API_URL}/files/aws`, formData);

            if (!selectedChat || !socket) return;
            const message: Message = {
                chatId: selectedChat,
                files: files.data,
                senderId: userId,
                recipientId: findRecipientId(selectedChat),
            };
            socket.emit("message", message);
            setMessages((prevMessages) => [...prevMessages, message]);
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };


    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    };

    const handleDownload = (imageUrl: string) => {
        const link = document.createElement("a");
        link.href = imageUrl;

        const extension: string = imageUrl.split('.').pop() || '';
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif']; // Добавьте другие расширения, если необходимо

        if (imageExtensions.includes(extension.toLowerCase())) {
            window.open(imageUrl, '_blank');
        } else {
            link.download = imageUrl;
            link.click();
        }
    };

    const sendMessage = () => {
        if (!selectedChat || !socket) return;
        const message: Message = {
            chatId: selectedChat,
            text: messageInput,
            senderId: userId,
            recipientId: findRecipientId(selectedChat),
        };
        socket.emit("message", message);
        setMessageInput("");
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const handleIncomingMessage = (newMessage: Message) => {
        if (newMessage.chatId === selectedChat) {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            console.log("Received message:", newMessage);
        }
    };

    const fetchMessages = async (chatId: string) => {
        try {
            const response = await $api.get(`${API_URL}/message/${chatId}`);
            setMessages(response.data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    const findSelectedChatId = (chats: IChat[], userId: string): string | null => {
        const selectedChat = chats.find((chat) =>
            chat.participants.some((participant) => participant._id === userId),
        );
        return selectedChat?._id || null;
    };

    useEffect(() => {
        if (socket) {
            socket.on("message", handleIncomingMessage);
        }
        return () => {
            if (socket) {
                socket.off("message");
            }
        };
    }, [socket, selectedChat]);

    useEffect(() => {
        if (socket && selectedChat) {
            socket.emit("join", selectedChat);
            fetchMessages(selectedChat);
        }
    }, [socket, selectedChat]);

    useEffect(() => {
        const selectedChatId = findSelectedChatId(chats, paramUserId || userId);
        setSelectedChat(selectedChatId as string);
        if (socket && selectedChatId) {
            socket.emit("join", selectedChatId);
        }
    }, [paramUserId, chats, socket]);

    return (
        <div className={style.chatMessages}>
            <div className={style.chatPersonLabel}>
                <img
                    className={style.chatPersonImage}
                    src="https://random.imagecdn.app/40/40"
                    alt="image"
                />
                <div className={style.chatPersonName}>
              <span>
                {chats.map((chat) =>
                    chat._id === selectedChat
                        ? chat.participants.find(
                            (participant) => participant._id !== userId,
                        )?.name
                        : null,
                )}
              </span>
                    <span>
                {chats.map((chat) =>
                    chat._id === selectedChat
                        ? chat.participants.find(
                            (participant) => participant._id !== userId,
                        )?.surname
                        : null,
                )}
              </span>
                </div>
            </div>
            {/* Chat message list */}
            <div className={style.messages}>
                {selectedChat &&
                    messages
                        .filter((message) => message.chatId === selectedChat)
                        .map((message, index) => (
                            message.text ?
                                <div
                                    key={index}
                                    className={
                                        message.senderId === userId
                                            ? `${style.userRight}`
                                            : `${style.userLeft}`
                                    }
                                >
                                    <p>{message.text}</p>
                                </div> :
                                message.files?.map(fileMessage => {
                                    return <div
                                        key={index}
                                        className={
                                            message.senderId === userId
                                                ? `${style.userRight}`
                                                : `${style.userLeft}`
                                        }
                                    >
                                        <div className={
                                            message.senderId === userId
                                                ? `${style.fileMessageBlock}`
                                                : `${style.fileMessageBlockLeft}`
                                        } onClick={() => handleDownload(fileMessage.url)}
                                        >
                                            <p>{fileMessage.originalName}</p>
                                            <CiFileOn style={{minWidth: '30px', minHeight: '30px'}}/>
                                        </div>
                                    </div>
                                })
                        ))}
            </div>
            {/* Message input and send button */}
            <div className={style.chatSendLabel}>
                <button onClick={handleClick}>
                    <input
                        type="file"
                        style={{display: "none"}}
                        ref={(input) => (fileInput = input)}
                        onChange={handleFilesChange}
                    />
                    <BsPaperclip className={style.sendFileButton}/>
                </button>
                <input
                    placeholder="Send message..."
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
                <button onClick={sendMessage}>
                    <IoSend className={style.sendMessageButton}/>
                </button>
            </div>
        </div>
    )
}