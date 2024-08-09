import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from "./utils/ProtectedRoute";

const routes = (
  // <Routes basename={"/hrsummit"}>
    <Route path="/hrsummit" element={<App />}>
      <Route index element={<AllTab />} />
      <Route path="awards" element={<AllAward />} />
      <Route path="login" element={<Login />} />
      <Route path="register/:id" element={<Register />} />
      <Route
        path="admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      >
        <Route path="table" element={<Table />} />
        <Route path="files" element={<File />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  // </Routes>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Scroll />
      <Provider store={store}>{routes}</Provider>
    </Router>
  </React.StrictMode>
);
