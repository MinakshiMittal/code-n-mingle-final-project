import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";

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
  const { isUserLoggedIn, token: savedToken } = JSON.parse(
    localStorage?.getItem("login")
  ) || { isUserLoggedIn: false, token: null };

  const [isUserLogin, setLogin] = useState(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);

  const [buyerDetails, setBuyerDetails] = useState({
    buyerId: null,
  });

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
    console.log(buyerSignUpResponse);
    if (buyerSignUpResponse.status === 200) {
      loginBuyerWithCredentials(email, password);
    }
  };

  async function loginBuyerWithCredentials(email, password) {
    try {
      const buyerLoginResponse = await buyerLoginService(email, password);
      console.log(buyerLoginResponse);
      if (buyerLoginResponse.status === 200) {
        loginBuyer(buyerLoginResponse.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const loginBuyer = ({ token, buyerId }) => {
    setToken(token);
    setLogin(true);
    setBuyerDetails({
      buyerId: buyerId,
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
    <BuyerAuthContext.Provider
      value={{
        isUserLogin,
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
