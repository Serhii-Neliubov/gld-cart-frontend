import { Socket, io} from 'socket.io-client';
import {DefaultEventsMap} from '@socket.io/component-emitter';

import {API_URL} from "@/utils/interceptors.ts";

let socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;

export default function getSocket(userId: string) {
  if(socket) {
    return socket;
  }

  socket = io(API_URL, { query: { userId } });
  socket.connect();

  return socket;
}