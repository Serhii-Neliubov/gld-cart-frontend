import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/home" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
