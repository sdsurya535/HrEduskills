import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AllAward from "./pages/awards/AllAward";
import AllTab from "./AllTab";
import "./index.css";
import Scroll from "./components/scrolltop/Scroll";

const routes = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<AllTab />} />
      <Route path="awards" element={<AllAward />} />
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