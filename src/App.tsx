import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@/store/store";
import { checkAuth } from "@/store/slices/userDataSlice.ts";

import Navigation from "@/navigation/Navigation.tsx";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Navigation />
  );
};

export default App;