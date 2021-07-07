import "./CoderSignUpForm.css";
import { Link } from "react-router-dom";
import { useCoderAuth } from "../../../Context";
import { useState } from "react";
import { ErrorNotice } from "../../../Components";
import axios from "axios";

export const CoderSignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const { signUpCoderWithDetails } = useCoderAuth();

  const signUpHandler = async (event) => {
    event.preventDefault();
    signUpCoderWithDetails(firstName, lastName, email, password);
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
