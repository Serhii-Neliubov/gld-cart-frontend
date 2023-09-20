import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Renting from "../pages/Renting";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Renting />} path="/renting" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
