import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";

export const CoderAuthContext = createContext();

const coderSignUpService = (firstName, lastName, email, password) => {
  return axios.post(
    "https://code-n-mingle-backend.mittalminakshi.repl.co/coder/signup",
    {
      firstName,
      lastName,
      email,
      password,
    }
  );
};

const coderLoginService = (email, password) => {
  return axios.post(
    "https://code-n-mingle-backend.mittalminakshi.repl.co/coder/login",
    { email, password }
  );
};

export const CoderAuthProvider = ({ children }) => {
  const { isUserLoggedIn, token: savedToken } = JSON.parse(
    localStorage?.getItem("login")
  ) || { isUserLoggedIn: false, token: null };

  const [isUserLogin, setLogin] = useState(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);
  const [coderDetails, setCoderDetails] = useState({
    coderId: null,
  });

  const signUpCoderWithDetails = async (
    firstName,
    lastName,
    email,
    password
  ) => {
    const coderSignUpResponse = await coderSignUpService(
      firstName,
      lastName,
      email,
      password
    );
    console.log(coderSignUpResponse);
    if (coderSignUpResponse.status === 200) {
      loginCoderWithCredentials(email, password);
    }
  };

  async function loginCoderWithCredentials(email, password) {
    try {
      const coderLoginResponse = await coderLoginService(email, password);
      console.log(coderLoginResponse);
      if (coderLoginResponse.status === 200) {
        loginCoder(coderLoginResponse.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const loginCoder = ({ token, coderId }) => {
    setToken(token);
    setLogin(true);
    setCoderDetails({
      coderId: coderId,
    });
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
    <CoderAuthContext.Provider
      value={{
        isUserLogin,
        loginCoderWithCredentials,
        logout,
        token,
        coderDetails,
        setCoderDetails,
        signUpCoderWithDetails,
      }}
    >
      {children}
    </CoderAuthContext.Provider>
  );
};

export const useCoderAuth = () => {
  return useContext(CoderAuthContext);
};
