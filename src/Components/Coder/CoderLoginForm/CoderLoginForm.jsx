import "./CoderLoginForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCoderAuth } from "../../../Context";

export const CoderLoginForm = () => {
  const { isUserLogin, loginCoderWithCredentials, logout } = useCoderAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    isUserLogin ? logout() : loginCoderWithCredentials(email, password);
  };

  console.log(isUserLogin);

  return (
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={loginHandler}>Sign In</button>
        <span>
          Don't have any account?
          <Link to="/coder/signup">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};
