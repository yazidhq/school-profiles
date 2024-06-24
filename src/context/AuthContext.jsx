import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useLoading from "../hooks/useLoading";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [loading, setLoading] = useLoading();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoggedIn(!!user);
      setLoading(false);
    });
    return unsubscribe;
  }, [setLoading]);

  const handleLogin = async (e) => {
    setIsLoggedIn(false);
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      setIsInvalid(true);
    } finally {
      setLoading(false);
    }
  };

  const breakInvalid = () => {
    setIsInvalid(false);
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setCurrentUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        isInvalid,
        handleLogin,
        breakInvalid,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
