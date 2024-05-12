import io, {Socket} from "socket.io-client";
import {API_URL} from "@/utils/interceptors/interceptors.ts";

let socket: Socket;

export default function getSocket(userId: string) {
  if(socket) return socket;

  socket = io(`${API_URL}/chat`, { query: { userId } });
  return socket;
}