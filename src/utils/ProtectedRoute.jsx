/* eslint-disable react/prop-types */
//import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  //const [active, setActive] = useState(false);

  return token ? children : <Navigate to="/hrsummit/login" />;
};

export default ProtectedRoute;
