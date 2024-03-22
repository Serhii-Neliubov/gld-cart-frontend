import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDataSelector } from "@/store/slices/userDataSlice.ts";
import $api, { API_URL } from "@/utils/interceptors/interceptors.ts";
import { IoSend } from "react-icons/io5";
import { sendMessage, selectSocket } from "@/store/slices/socketSlice.ts";
import style from "./Chat.module.scss";
import {useNavigate, useParams} from "react-router-dom";

interface User {
  _id: string;
  name: string;
  surname?: string;
  type: string;
  is_online: boolean;
}

export interface Chat {
  _id: string;
  participants: User[];
}

interface Message {
  chatId: string;
  text: string;
  senderId: string;
  recipientId: string;
}

export const Chat: React.FC = () => {
  const [messageInput, setMessageInput] = useState("");
  const userId = useSelector(userDataSelector).id;
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const socket = useSelector(selectSocket);
  const inputRef = useRef<HTMLInputElement>(null);
  const { chatId } = useParams();
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (socket && chatId) {
      socket.emit("join", chatId);
      fetchMessages(chatId);
      setSelectedChat(chatId);
    }
  }, [socket, chatId]);

  useEffect(() => {
    if (socket) {
      socket.on("message", (newMessage: Message) => {
        console.log("Received message:", newMessage);
        console.log("Selected chat:", chatId);
        console.log("ChatId:", newMessage.chatId);
        if (newMessage.chatId === chatId) {
          console.log("Adding message to chat:", newMessage);
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
      });

      socket.emit('chats', userId)
      socket.on('chats', (chats: Chat[]) => {
        setChats(chats);
        // Если текущий chatId не установлен, выберите первый чат из списка
        if (!chatId && chats.length > 0) {
          selectChat(chats[0]._id);
        }
      });
    }

    return () => {
      if (socket) {
        socket.off("message");
      }
    };
  }, [socket, chatId]);

  const fetchMessages = async (chatId: string) => {
    try {
      const response = await $api.get(`${API_URL}/message/${chatId}`);
      console.log("Fetched messages:", response)
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // TODO - сделать отправку сообщения по уникальному айди юзера

  const sendMessageToSocket = () => {
    if (!chatId || !socket || !messageInput.trim()) return;

    const message: Message = {
      chatId: chatId,
      text: messageInput.trim(),
      senderId: userId,
      recipientId: chats.find((chat) => chat._id === selectedChat)?.participants[1]._id || "",
    };
    try {
      socket.emit("message", message);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setMessageInput("");
  };

  const selectChat = (chatId: string) => {
    setSelectedChat(chatId);

    navigate(`/chat/${chatId}`)

    inputRef.current?.focus();
    socket?.emit("join", chatId);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessageToSocket();
    }
  };

  return (
    <div className="__container">
      <div className={style.chatWrapper}>
        {/* Chat List */}
        <div className={style.chatListWrapper}>
          <div className={style.searchChats}>
            <input placeholder="Search for anything..." />
          </div>
          <ul className={style.chatsList}>
            {chats.map((chat) => (
              <div className={style.chatPerson}>
                <img
                  className={style.chatPersonImage}
                  src="https://random.imagecdn.app/40/40"
                  alt="image"
                />
                <li
                  className={style.chatPersonName}
                  key={chat._id}
                  onClick={() => selectChat(chat._id)}
                >
                  {userId !== chat.participants[1]._id
                    ? chat.participants[1].name
                    : chat.participants[0].name}{" "}
                  {userId !== chat.participants[1]._id
                    ? chat.participants[1].surname
                    : chat.participants[0].surname}
                </li>
              </div>
            ))}
          </ul>
        </div>
        {/* Chat Messages */}
        <div className={style.chatMessages}>
          <div className={style.chatPersonLabel}>
            <img
              className={style.chatPersonImage}
              src="https://random.imagecdn.app/40/40"
              alt="image"
            />
            <span className={style.chatPersonName}>John Doe</span>
          </div>
          {/* Chat message list */}
          <div className={style.messages}>
            {selectedChat &&
              messages
                .filter((message) => message.chatId === chatId)
                .map((message, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: message.senderId === userId ? "right" : "left",
                    }}
                  >
                    <p>{message.text}</p>
                  </div>
                ))}
          </div>
          {/* Message input and send button */}
          <div className={style.chatSendLabel}>
            <input
              placeholder="Send message..."
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            />
            <button onClick={sendMessageToSocket}>
              <IoSend className={style.sendMessageButton} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
