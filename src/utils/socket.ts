import { Socket } from "socket.io-client";

export const initSocket = (socket: Socket) => {
  if(!socket) {
    return console.error('socket is not defined');
  } else {
    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    socket.on('error', (error: Error) => {
      console.error('error', error);
    });
  }
}