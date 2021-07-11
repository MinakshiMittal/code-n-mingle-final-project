import "./MainNav.css";
import { Link } from "react-router-dom";
import { useBuyerAuth, useCoderAuth } from "../../Context";

export const MainNav = () => {
  const { isCoderLogin, logout } = useCoderAuth();
  const { isBuyerLogin } = useBuyerAuth();
  return (
    <div className="page-main-menu">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/08/10/49/group-1962592_1280.png"
        alt="logo"
        className="hero-image"
      ></img>
      <div className="hero-name">CODE-N-MINGLE</div>
      {!isCoderLogin && (
        <Link to="/available-projects" className="get-started">
          Explore
        </Link>
      )}
      <Link to="/blogs" className="docs">
        About Us
      </Link>
      {!isCoderLogin && (
        <Link className="login" to="/coder/login">
          Log In
        </Link>
      )}
      {!isCoderLogin && (
        <Link className="signup" to="/coder/signup">
          Sign Up
        </Link>
      )}
      {isCoderLogin && <button onClick={logout}>Logout</button>}
      {isCoderLogin && <Link to="/coder/dashboard">Dashboard</Link>}
      {!isCoderLogin && !isBuyerLogin && (
        <Link to="/buyer">Become a Buyer</Link>
      )}
    </div>
  );
};
