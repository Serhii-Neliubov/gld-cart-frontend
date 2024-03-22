// socketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SocketState {
  socketId: string | null;
}

const initialState: SocketState = {
  socketId: null,
};

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setSocketId: (state, action: PayloadAction<string | null>) => {
      state.socketId = action.payload;
    },
  },
});

export const { setSocketId } = socketSlice.actions;

export const selectSocketId = (state: RootState) => state.socket.socketId;

export default socketSlice.reducer;
