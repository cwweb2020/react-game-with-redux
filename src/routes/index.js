import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Layout from "./Layout";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
