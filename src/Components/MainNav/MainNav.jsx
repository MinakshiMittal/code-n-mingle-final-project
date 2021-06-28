import "./MainNav.css";
import {Link} from "react-router-dom";

export const MainNav = () => {
  return (
    <div className="horizontal-nav-bar-demo">
      <div className="hero-name">LOGO</div>
      <Link to="/available-projects"><a href="/" className="get-started">
        Explore
      </a></Link>
      <Link to="/blogs"><a href="/" className="docs">
        Blogs
      </a></Link>
      <a href="/" className="github">
        About Us
      </a>
      <a href="/" className="github">
        Log In
      </a>
      <a href="/" className="github">
        Sign Up
      </a>
    </div>
  );
};
