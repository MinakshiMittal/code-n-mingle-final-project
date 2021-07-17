import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BuyerAuthContext = createContext();

const buyerSignUpService = (firstName, lastName, email, password) => {
  return axios.post(
    "https://code-n-mingle-backend.mittalminakshi.repl.co/buyer/signup",
    {
      firstName,
      lastName,
      email,
      password,
    }
  );
};

const buyerLoginService = (email, password) => {
  return axios.post(
    "https://code-n-mingle-backend.mittalminakshi.repl.co/buyer/login",
    { email, password }
  );
};

export const BuyerAuthProvider = ({ children }) => {
  const {
    isBuyerLoggedIn,
    token: savedToken,
    buyerId,
  } = JSON.parse(localStorage?.getItem("login")) || {
    isBuyerLoggedIn: false,
    token: null,
    buyerId: null,
  };

  const [isBuyerLogin, setLogin] = useState(isBuyerLoggedIn);
  const [token, setToken] = useState(savedToken);
  const [buyerDetails, setBuyerDetails] = useState(buyerId);
  const navigate = useNavigate();
  const coderDetails = "60edcbe68b91d600258b5d69";

  const signUpBuyerWithDetails = async (
    firstName,
    lastName,
    email,
    password
  ) => {
    const buyerSignUpResponse = await buyerSignUpService(
      firstName,
      lastName,
      email,
      password
    );
    if (buyerSignUpResponse.status === 200) {
      loginBuyerWithCredentials(email, password);
    }
  };

  async function loginBuyerWithCredentials(email, password) {
    try {
      const buyerLoginResponse = await buyerLoginService(email, password);
      if (buyerLoginResponse.status === 200) {
        loginBuyer(buyerLoginResponse.data);
        navigate("/buyer/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const loginBuyer = ({ token, buyerId }) => {
    setToken(token);
    setLogin(true);
    setBuyerDetails(buyerId);
    localStorage.setItem(
      "login",
      JSON.stringify({ isBuyerLoggedIn: true, token, buyerId })
    );
  };

  const logout = () => {
    localStorage.removeItem("login");
    setLogin(false);
    setToken(null);
    navigate("/");
  };

  return (
    <BuyerAuthContext.Provider
      value={{
        isBuyerLogin,
        logout,
        token,
        signUpBuyerWithDetails,
        loginBuyerWithCredentials,
        buyerDetails,
        setBuyerDetails,
      }}
    >
      {children}
    </BuyerAuthContext.Provider>
  );
};

export const useBuyerAuth = () => {
  return useContext(BuyerAuthContext);
};
