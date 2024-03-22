// socketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import io, { Socket } from 'socket.io-client';
import {API_URL} from "@/utils/interceptors/interceptors.ts";

interface Message {
  chatId: string;
  text: string;
  senderId: string;
  recipientId: string;
}

interface SocketState {
  socket: Socket | null;
}

const initialState: SocketState = {
  socket: null,
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setSocket: (state, action: PayloadAction<Socket | null>) => {
      state.socket = action.payload;
    },
  },
});

export const { setSocket } = socketSlice.actions;

export const initSocket = (userId: string) => async (dispatch: any) => {
  const newSocket = io(API_URL, { query: { userId } });
  dispatch(setSocket(newSocket));
};

export const sendMessage = (message: Message) => async (dispatch: any, getState: any) => {
  const { socket } = getState().socket;
  if (socket) {
    socket.emit('message', message);
  }
};

export const selectSocket = (state: RootState) => state.socket.socket;

export default socketSlice.reducer;
