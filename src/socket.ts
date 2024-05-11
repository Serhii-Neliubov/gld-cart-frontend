import { io } from 'socket.io-client';
import {API_URL} from "@/utils/interceptors/interceptors.ts";

let socket = null;

export default function getSocket(userId: string) {
    console.log('userId', userId);
    if(socket) {
        console.log('socket', socket);
        return socket;
    }

    socket = io(API_URL, { query: { userId } });
    // socket.connect();
    console.log('created new socket', socket);
    return socket;
}