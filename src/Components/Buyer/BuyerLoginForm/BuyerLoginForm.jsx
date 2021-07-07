import "./BuyerLoginForm.css";
import { Link } from "react-router-dom";

export const BuyerLoginForm = () => {
  return (
    <div class="form-container sign-in-container">
      <form>
        <h1>Sign in</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
        <span>
          Don't have any account?
          <Link to="/buyer/signup">Sign Up</Link>
        </span>
      </form>
    </div>
  );
};
