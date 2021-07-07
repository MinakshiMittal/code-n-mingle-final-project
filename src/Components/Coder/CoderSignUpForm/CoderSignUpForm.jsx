import "./CoderSignUpForm.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context";
import { useState } from "react";
import { ErrorNotice } from "../../../Components";
import axios from "axios";

export const CoderSignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const { coderDetails, setCoderDetails } = useAuth();

  const signUpHandler = async (event) => {
    event.preventDefault();
    try {
      const newUser = { firstName, lastName, email, password };
      console.log(newUser);
      await axios.post(
        "https://code-n-mingle-backend.mittalminakshi.repl.co/coder/signup",
        newUser
      );
      const { data } = await axios.post(
        "https://code-n-mingle-backend.mittalminakshi.repl.co/coder/login",
        {
          email,
          password,
        }
      );
      setCoderDetails({
        token: data.token,
        coderId: data.coderId,
      });
      localStorage.setItem(
        "login",
        JSON.stringify({ isUserLoggedIn: true, token: coderDetails.token })
      );
    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg);
      console.log(error);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        <input
          type="text"
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
        />
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
        <button onClick={signUpHandler}>Sign Up</button>
        <span>
          Already have an account? <Link to="/coder/login">Log In</Link>
        </span>
      </form>
    </div>
  );
};
