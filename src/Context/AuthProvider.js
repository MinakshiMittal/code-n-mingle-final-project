import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

const loginService = (email, password) => {
  return axios.post(
    "https://code-n-mingle-backend.mittalminakshi.repl.co/buyer/login",
    { email, password }
  );
};

export const AuthProvider = ({ children }) => {
  const { isUserLoggedIn, token: savedToken } = JSON.parse(
    localStorage?.getItem("login")
  ) || { isUserLoggedIn: false, token: null };
  const [isUserLogin, setLogin] = useState(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);
  const [coderDetails, setCoderDetails] = useState({
    token: null,
    coderId: null,
  });

  async function loginUserWithCredentials(username, password) {
    try {
      const response = await loginService(username, password);
      console.log(response);
      if (response.status === 200) {
        loginUser(response.data);
      }
    } catch (error) {
      console.log("Sahi username password nahi pata kya?", error);
    }
  }

  const loginUser = ({ token }) => {
    setToken(token);
    setLogin(true);
    localStorage.setItem(
      "login",
      JSON.stringify({ isUserLoggedIn: true, token })
    );
  };

  const logout = () => {
    localStorage.removeItem("login");
    setLogin(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLogin,
        loginUserWithCredentials,
        logout,
        token,
        setCoderDetails,
        coderDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
