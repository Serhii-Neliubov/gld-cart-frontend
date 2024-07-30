import { useEffect } from "react";
import { FC } from "react";
import { AppDispatch, RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, userDataSelector } from "./store/slices/userDataSlice.ts";
import IUser from "@/utils/models/IUser.ts";
import {initSocket} from "@/store/slices/socketSlice.ts";
import Navigation from "@/navigation/Navigation.tsx";

const App: FC = () => {
  const user = useSelector<RootState, IUser>(userDataSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if(!user._id) return;

    initSocket(user._id)(dispatch);
  }, [user._id]);

    return (
      <>
        <Navigation />
      </>
    );
};

export default App;