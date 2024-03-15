import React, {useEffect, useRef, useState} from 'react';
import styles from './SupportChat.module.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import IUser from "@/utils/models/IUser.ts";
import {io, Socket} from "socket.io-client";

export interface Chat {
    _id: string;
    participants: IUser[];
}

interface Message {
    chatId: string;
    text: string;
    senderId: string;
    recipientId: string;
}

const SOCKET_SERVER_URL = "http://localhost:3002";

export const SupportChat = () => {
    const [isChatActive, setIsChatActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [messageInput, setMessageInput] = useState("");
    const userId = useSelector(userDataSelector).id;
    const [chats, setChats] = useState<Chat[]>([]);
    const [selectedChat, setSelectedChat] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL, { query: { userId } });
        setSocket(newSocket);
        fetchChats();

        return () => {
            newSocket.disconnect();
        };
    }, [userId]);

    useEffect(() => {
        if (socket && selectedChat) {
            socket.emit("join", selectedChat);
            fetchMessages(selectedChat);
        }
    }, [socket, selectedChat]);

    useEffect(() => {
        if (socket) {
            socket.on("message", (newMessage: Message) => {
                console.log("Received message:", newMessage);
                console.log("Selected chat:", selectedChat);
                console.log("ChatId:", newMessage.chatId);
                if (newMessage.chatId === selectedChat) {
                    console.log("Adding message to chat:", newMessage);
                    setMessages((prevMessages) => [...prevMessages, newMessage]);
                }
            });
        }
        return () => {
            if (socket) {
                socket.off("message");
            }
        };
    }, [socket, selectedChat]);
    const fetchChats = async () => {
        try {
            const response = await fetch(
              `http://localhost:3001/chat?userId=${userId}`,
            );
            if (!response.ok) {
                throw new Error("Failed to fetch chats");
            }
            const chatsData = await response.json();
            setChats(chatsData);
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    };

    const fetchMessages = async (chatId: string) => {
        try {
            const response = await fetch(`http://localhost:3001/message/${chatId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch messages");
            }
            const messagesData = await response.json();
            setMessages(messagesData);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    const sendMessage = () => {
        if (!selectedChat || !socket) return;

        const message: Message = {
            chatId: selectedChat,
            text: messageInput,
            senderId: userId,
            recipientId:
              chats.find((chat) => chat._id === selectedChat)?.participants[1]._id ||
              "",
        };
        console.log("Sending message:", message);
        socket.emit("message", message);
        setMessageInput("");
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const selectChat = (chatId: string) => {
        setSelectedChat(chatId);
        inputRef.current?.focus();
        socket?.emit("join", chatId);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className='__container'>
            <div className={styles.content}>
                <div className={styles.actionButtons}>
                    <Link to='/help-and-support'>
                        <button className={styles.backButton}/>
                    </Link>
                    <Link to='/'>
                        <img className={styles.logo} src='src/assets/images/SupportChat/logo.png' alt='logo'/>
                    </Link>
                    <Link to='/faq-s'>
                        <button className={styles.faqsButton}/>
                    </Link>
                </div>
                <div className={styles.chatBoxContainer}>
                    {isChatActive ?
                        <div className={styles.chatBox}>
                            <div className={styles.messages}>
                                {/*{messages.map((message) =>*/}
                                {/*    <div className={styles.message}>{message}</div>*/}
                                {/*)}*/}
                            </div>
                        </div> :
                        <div className={styles.noActiveChatBox}>
                                <h1>How can I help you?</h1>
                                <div className={styles.questionBoxes}>
                                    <div className={styles.questionBoxesColumn}>
                                        <div onClick={() => {
                                            setInputValue('How do I create an account on the shopping site?')
                                            setIsChatActive(true)
                                        }} className={styles.questionBox}>
                                            <div>
                                                <span>How do I create an account on the shopping site?</span>
                                            </div>
                                            <img src='src/assets/images/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                        </div>
                                        <div onClick={() => {
                                            setInputValue('Checkout or "Place Order" to complete your purchase?')
                                            setIsChatActive(true)
                                        }} className={styles.questionBox}>
                                            <div>
                                                <span>Checkout or "Place Order" to complete your purchase?</span>
                                            </div>
                                            <img src='src/assets/images/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                        </div>
                                    </div>
                                    <div className={styles.questionBoxesColumn}>
                                        <div onClick={() => {
                                            setInputValue('Add them to your cart or wish list?')
                                            setIsChatActive(true)
                                        }} className={styles.questionBox}>
                                            <div>
                                                <span>Add them to your cart or wish list?</span>
                                            </div>
                                            <img src='src/assets/images/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                        </div>
                                        <div onClick={() => {
                                            setInputValue('How do I apply a promo code or discount during checkout?')
                                            setIsChatActive(true)
                                        }} className={styles.questionBox}>
                                            <div>
                                                <span>How do I apply a promo code or discount during checkout?</span>
                                            </div>
                                            <img src='src/assets/images/SupportChat/arrow-top.svg' alt='arrow top icon'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                        </div>
                        <div className={styles.chatAreaInput}>
                        <button>
                        <img src='src/assets/images/SupportChat/voice-input.svg' className={styles.voiceInput} alt='voice input'/>
                    </button>
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className={styles.textInput} placeholder='Write here anything...'/>
                    <button>
                        <img src='src/assets/images/SupportChat/emodji-file.svg' className={styles.voiceInput} alt='emodji input'/>
                    </button>
                    <button>
                        <img src='src/assets/images/SupportChat/file-input.svg' className={styles.voiceInput} alt='file input'/>
                    </button>
                    <button onClick={sendMessage}>
                        <img src='src/assets/images/SupportChat/send-message-button.svg' className={styles.voiceInput}
                             alt='send message'/>
                    </button>
                </div>
            </div>
        </div>
    )
}