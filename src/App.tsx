import { useEffect } from "react";
import { FC } from "react";
import { AppDispatch } from "./store/store";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/slices/userDataSlice.ts";
import Navigation from "@/navigation/Navigation.tsx";

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Navigation />
  );
};

export default App;