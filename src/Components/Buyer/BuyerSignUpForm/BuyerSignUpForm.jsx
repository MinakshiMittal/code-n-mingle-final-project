import "./BuyerSignUpForm.css";
import { Link } from "react-router-dom";
import { useBuyerAuth } from "../../../Context";
import { useState } from "react";
import { ErrorNotice } from "../../../Components";

export const BuyerSignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const { signUpBuyerWithDetails } = useBuyerAuth();

  const signUpHandler = async (event) => {
    event.preventDefault();
    signUpBuyerWithDetails(firstName, lastName, email, password);
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
          Already have an account? <Link to="/buyer/login">Log In</Link>
        </span>
      </form>
    </div>
  );
};
