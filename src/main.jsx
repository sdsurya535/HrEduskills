import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AllAward from "./pages/awards/AllAward";
import AllTab from "./AllTab";
import "./index.css";
import Scroll from "./components/scrolltop/Scroll";
import ErrorPage from "./pages/errorpage/ErrorPage";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Table from "./pages/table/Table";
import File from "./pages/File/File";
import Register from "./components/register/Register";

const routes = (
  <Routes>
    <Route path="/hreduskills" element={<App />}>
      <Route index element={<AllTab />} />
      <Route path="awards" element={<AllAward />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />} />
      <Route path="admin" element={<Admin />}>
        <Route path="table" element={<Table />} />
        <Route path="files" element={<File />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Scroll />
      {routes}
    </Router>
  </React.StrictMode>
);
