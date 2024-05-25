import style from "@pages/chat/Chat.module.scss";
import {CiSearch} from "react-icons/ci";
import React, {useEffect} from "react";
import io from "socket.io-client";
import {API_URL} from "@utils/interceptors.ts";
import {useSelector} from "react-redux";
import {userDataSelector} from "@store/slices/userDataSlice.ts";

interface User {
    _id: string;
    name: string;
    surname?: string;
    type: string;
    is_online: boolean;
}

export interface IChat {
    _id: string;
    participants: User[];
}

interface ChatsListProps {
    inputRef: React.RefObject<HTMLInputElement>;
    setChats: React.Dispatch<React.SetStateAction<IChat[]>>;
    setSelectedChat: (chatId: string) => void;
    chats: IChat[];
    findRecipientId: (chatId: string) => string;
}

export default function ChatsList({inputRef, setChats, setSelectedChat, chats, findRecipientId}: ChatsListProps) {
    const userId = useSelector(userDataSelector).id;
    const socket = io(`${API_URL}/chat`, { query: { userId } });

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

    const selectChat = (chatId: string) => {
        setSelectedChat(chatId);
        inputRef.current?.focus();

        if (socket) {
            socket.emit("join", chatId);
        }

        const otherUserId = findRecipientId(chatId);
        window.history.pushState({}, "", `/chat/${otherUserId}`);
    };

    useEffect(() => {
        socket.on("chats", (chatData) => {
            setChats(chatData);
        });
        socket.on("status", (statusData) => {
            updateChatStatus(statusData);
        });
        socket.on("newChat", (newChat: IChat) => {
            setChats((prevChats) => [...prevChats, newChat]);
        });
        return () => {
            socket.disconnect();
        };
    }, [userId]);

    return (
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
                            {(
                                userId !== chat.participants[1]._id
                                    ? chat.participants[1].is_online
                                    : chat.participants[0].is_online
                            ) ? (
                                <div className={style.chatPersonStatus}/>
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
    )
}