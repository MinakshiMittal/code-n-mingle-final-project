import "./MainNav.css";
import { Link } from "react-router-dom";

export const MainNav = () => {
  return (
    <div className="page-main-menu">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/08/10/49/group-1962592_1280.png"
        alt="logo"
        class="hero-image"
      ></img>
      <div className="hero-name">CODE-N-MINGLE</div>
      <Link to="/available-projects">
        <a href="/" className="get-started">
          Explore
        </a>
      </Link>
      <Link to="/blogs">
        <a href="/" className="docs">
          About Us
        </a>
      </Link>
      {/* <a href="/" className="github">
        About Us
      </a> */}
      <Link className="login" to="/coder/login">
        Log In
      </Link>
      <Link className="signup" to="/coder/signup">
        Sign Up
      </Link>
    </div>
  );
};
