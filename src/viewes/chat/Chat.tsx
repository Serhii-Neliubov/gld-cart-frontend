import React, { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import style from "./Chat.module.scss";
import { useSelector } from "react-redux";
import { userDataSelector } from "@/store/slices/userDataSlice.ts";
import $api, { API_URL } from "@/utils/interceptors/interceptors.ts";
import { IoSend } from "react-icons/io5";
import { useParams } from "react-router-dom";
import {CiSearch} from "react-icons/ci";
import {BsPaperclip} from "react-icons/bs";

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
  const [socket, setSocket] = useState<Socket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { recipientId: paramUserId } = useParams<{ recipientId: string }>();

  let fileInput: HTMLInputElement | null = useRef(null);

  useEffect(() => {
    const newSocket = io(`${API_URL}/chat`, { query: { userId } });
    setSocket(newSocket);
    newSocket.on("chats", (chatData) => {
      console.log(chatData);
      setChats(chatData);
    });
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log("Param user id:", paramUserId);
    const selectedChatId =
      chats.find((chat) =>
        chat.participants.some(
          (participant) => participant._id === paramUserId,
        ),
      )?._id || null;
    setSelectedChat(selectedChatId);
  }, [paramUserId, chats]);

  useEffect(() => {
    if (socket && selectedChat) {
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
    const otherUserId =
      chats
        .find((chat) => chat._id === chatId)
        ?.participants.find((participant) => participant._id !== userId)?._id ||
      "";
    window.history.pushState({}, "", `/chat/${otherUserId}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
  };

  const handleClick = () => {
    fileInput?.click();
  };

  // @ts-ignore
  return (
    <div className="__container">
      <div className={style.chatWrapper}>
        {/* Chat List */}
        <div className={style.chatListWrapper}>
          <div className={style.searchChats}>
            <div className={style.searchInput}>
              <input placeholder="Search for anything..."/>
              <button>
                <CiSearch/>
              </button>
            </div>
          </div>
          <ul className={style.chatsList}>
            {chats.map((chat) => (
              <div className={style.chatPerson}>
                <div className={style.chatPerson}>
                  <img
                    className={style.chatPersonImage}
                    src="https://random.imagecdn.app/40/40"
                    alt="image"
                  />
                  {(userId !== chat.participants[1]._id
                    ? chat.participants[1].is_online
                    : chat.participants[0].is_online) ? <div className={style.chatPersonStatus} /> : null}
                </div>

                <li
                  className={style.chatPersonName}
                  key={chat._id}
                  onClick={() => selectChat(chat._id)}
                >
                  <span>
                    {userId !== chat.participants[1]._id
                      ? chat.participants[1].name
                      : chat.participants[0].name}
                  </span>
                  <span>
                    {userId !== chat.participants[1]._id
                      ? chat.participants[1].surname
                      : chat.participants[0].surname}
                  </span>
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
            <div className={style.chatPersonName}>
              <span>
                {chats.map(chat => chat._id === selectedChat ? chat.participants.find(participant => participant._id !== userId).name : null)}
              </span>
              <span>
                {chats.map(chat => chat._id === selectedChat ? chat.participants.find(participant => participant._id !== userId).surname : null)}
              </span>
            </div>
          </div>
          {/* Chat message list */}
          <div className={style.messages}>
            {selectedChat &&
              messages
                .filter((message) => message.chatId === selectedChat)
                .map((message, index) => (
                  <div
                    key={index}
                    className={message.senderId === userId ? `${style.userRight}` : `${style.userLeft}`}
                  >
                    <p>{message.text}</p>
                  </div>
                ))}
          </div>
          {/* Message input and send button */}
          <div className={style.chatSendLabel}>
            <button onClick={handleClick}>
                <input
                  type="file"
                  style={{display: 'none'}}
                  ref={(input) => (fileInput = input)}
                  onChange={handleFileChange}
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
              <IoSend className={style.sendMessageButton} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
