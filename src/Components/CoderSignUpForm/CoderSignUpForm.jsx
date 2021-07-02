import "./CoderSignUpForm.css";
import { Link } from "react-router-dom";

export const CoderSignUpForm = () => {
  return (
    <div class="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
        <span>
          Already have an account? <Link to="/buyer/login">Log In</Link>
        </span>
      </form>
    </div>
  );
};
