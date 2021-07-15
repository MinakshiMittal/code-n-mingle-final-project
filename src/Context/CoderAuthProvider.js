import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const {
    isCoderLoggedIn,
    token: savedToken,
    coderId,
  } = JSON.parse(localStorage?.getItem("login")) || {
    isCoderLoggedIn: false,
    token: null,
    coderId: null,
  };

  const [isCoderLogin, setLogin] = useState(isCoderLoggedIn);
  const [token, setToken] = useState(savedToken);
  const [coderDetails, setCoderDetails] = useState(coderId);
  const { state } = useLocation();
  const navigate = useNavigate();

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
    if (coderSignUpResponse.status === 200) {
      loginCoderWithCredentials(email, password);
    }
  };

  async function loginCoderWithCredentials(email, password) {
    try {
      const coderLoginResponse = await coderLoginService(email, password);
      if (coderLoginResponse.status === 200) {
        loginCoder(coderLoginResponse.data);
        navigate("/coder/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const loginCoder = ({ token, coderId }) => {
    console.log(coderId);
    setToken(token);
    setLogin(true);
    setCoderDetails(coderId);
    localStorage.setItem(
      "login",
      JSON.stringify({ isCoderLoggedIn: true, token, coderId })
    );
  };

  const logout = () => {
    localStorage.removeItem("login");
    setLogin(false);
    setToken(null);
    navigate("/");
  };

  return (
    <CoderAuthContext.Provider
      value={{
        isCoderLogin,
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
