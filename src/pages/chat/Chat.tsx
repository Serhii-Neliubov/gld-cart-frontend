import {useRef, useState} from "react";
import style from "./Chat.module.scss";
import {useSelector} from "react-redux";
import {userDataSelector} from "@store/slices/userDataSlice.ts";
import ChatsList, {IChat} from "@pages/chat/ChatsList.tsx";
import ChatWindow from "@pages/chat/ChatWindow.tsx";

export default function Chat() {
  const userId = useSelector(userDataSelector).id;
  const [chats, setChats] = useState<IChat[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const findRecipientId = (chatId: string): string => {
    const chat = chats.find((chat) => chat._id === chatId);
    return (
        chat?.participants.find((participant) => participant._id !== userId)
            ?._id || ""
    );
  };

  return (
    <div className="__container">
      <div className={style.chatWrapper}>
        <ChatsList inputRef={inputRef} chats={chats} setChats={setChats} setSelectedChat={setSelectedChat} findRecipientId={findRecipientId}/>
        <ChatWindow findRecipientId={findRecipientId} selectedChat={selectedChat} setSelectedChat={setSelectedChat} chats={chats} inputRef={inputRef}/>
      </div>
    </div>
  );
}