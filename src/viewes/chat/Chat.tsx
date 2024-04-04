import React, {useEffect, useRef, useState} from "react";
import io, {Socket} from "socket.io-client";
import style from "./Chat.module.scss";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";
import {IoCloudDownloadOutline, IoSend} from "react-icons/io5";
import {useParams} from "react-router-dom";
import {CiFileOn, CiSearch} from "react-icons/ci";
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

interface File {
  url: string;
  name: string;
}

interface Message {
  chatId: string;
  text?: string;
  files?: File[] | null;
  senderId: string;
  recipientId: string;
}

export const Chat: React.FC = () => {
  const [messageInput, setMessageInput] = useState<string>("");
  const userId = useSelector(userDataSelector).id;
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { recipientId: paramUserId } = useParams<{ recipientId: string }>();
  let fileInput: HTMLInputElement | null = null;

  useEffect(() => {
    const newSocket = io(`${API_URL}/chat`, { query: { userId } });
    setSocket(newSocket);
    newSocket.on("chats", (chatData) => {
      setChats(chatData);
    });
    newSocket.on("status", (statusData) => {
      updateChatStatus(statusData);
    });
    newSocket.on("newChat", (newChat: Chat) => {
      setChats((prevChats) => [...prevChats, newChat]);
    });
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
      socket.on("message", handleIncomingMessage);
    }
    return () => {
      if (socket) {
        socket.off("message");
      }
    };
  }, [socket, selectedChat]);

  useEffect(() => {
    const selectedChatId = findSelectedChatId(chats, paramUserId || userId);
    setSelectedChat(selectedChatId);
    if (socket && selectedChatId) {
      socket.emit("join", selectedChatId);
    }
  }, [paramUserId, chats, socket]);

  const updateChatStatus = (statusData: any) => {
    setChats((prevChats) =>
      prevChats.map((chat) => {
        const updatedParticipants = chat.participants.map((participant) => {
          if (participant._id === statusData.userId) {
            return { ...participant, is_online: statusData.status };
          }
          return participant;
        });
        return { ...chat, participants: updatedParticipants };
      }),
    );
  };

  const findSelectedChatId = (chats: Chat[], userId: string): string | null => {
    const selectedChat = chats.find((chat) =>
      chat.participants.some((participant) => participant._id === userId),
    );
    return selectedChat?._id || null;
  };

  const fetchMessages = async (chatId: string) => {
    try {
      const response = await $api.get(`${API_URL}/message/${chatId}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleIncomingMessage = (newMessage: Message) => {
    if (newMessage.chatId === selectedChat) {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      console.log("Received message:", newMessage);
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

  const findRecipientId = (chatId: string): string => {
    const chat = chats.find((chat) => chat._id === chatId);
    return (
      chat?.participants.find((participant) => participant._id !== userId)
        ?._id || ""
    );
  };

  const selectChat = (chatId: string) => {
    setSelectedChat(chatId);
    inputRef.current?.focus();
    if (socket) {
      socket.emit("join", chatId);
    }
    const otherUserId = findRecipientId(chatId);
    window.history.pushState({}, "", `/chat/${otherUserId}`);
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

    const fileName = imageUrl.split('/').pop();

    link.download = fileName;

    link.setAttribute('download', fileName);
    link.setAttribute('target', '_blank');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const handleFilesChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const files = await $api.post(`${API_URL}/files/aws`, formData);
      console.log(files.data);
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

  const handleClick = () => {
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <div className="__container">
      <div className={style.chatWrapper}>
        {/* Chat List */}
        <div className={style.chatListWrapper}>
          <div className={style.searchChats}>
            <div className={style.searchInput}>
              <input placeholder="Search for anything..." />
              <button>
                <CiSearch />
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
                  {(
                    userId !== chat.participants[1]._id
                      ? chat.participants[1].is_online
                      : chat.participants[0].is_online
                  ) ? (
                    <div className={style.chatPersonStatus} />
                  ) : null}
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
              <IoSend className={style.sendMessageButton} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
