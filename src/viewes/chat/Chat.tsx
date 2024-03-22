import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDataSelector } from "@/store/slices/userDataSlice.ts";
import $api, { API_URL } from "@/utils/interceptors/interceptors.ts";
import { IoSend } from "react-icons/io5";
import { initSocket, sendMessage, selectSocket } from "@/store/slices/socketSlice.ts";
import style from "./Chat.module.scss";

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
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const socket = useSelector(selectSocket);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(initSocket(userId));
  }, []);

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

  const fetchMessages = async (chatId: string) => {
    try {
      const response = await $api.get(`${API_URL}/message/${chatId}`);

      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessageToSocket = () => {
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
    dispatch(sendMessage(message));
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
                .filter((message) => message.chatId === selectedChat)
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
