import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { io } from "socket.io-client";

import { AppDispatch } from "@/store/store";
import { checkAuth } from "@/store/slices/userDataSlice.ts";

import Navigation from "@/navigation/Navigation.tsx";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const socket = io();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Navigation />
  );
};

export default App;