import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthLayout from "../../../components/auth/AuthLayout";
import { useAuth } from "../../../context/AuthContext";

const LoginPage = () => {
  const { currentUser, isLoggedIn, handleLogin } = useAuth();

  if (currentUser || isLoggedIn) {
    return <Navigate to="/admin" />;
  }

  return <AuthLayout handleLogin={handleLogin} />;
};

export default LoginPage;
