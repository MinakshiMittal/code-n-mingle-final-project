import "./BuyerMainNav.css";
import { Link } from "react-router-dom";
import { useBuyerAuth } from "../../Context";

export const BuyerMainNav = () => {
  const { isBuyerLogin, logout } = useBuyerAuth();
  return (
    <div className="page-main-menu">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/08/10/49/group-1962592_1280.png"
        alt="logo"
        className="hero-image"
      ></img>
      <div className="hero-name">CODE-N-MINGLE</div>
      {!isBuyerLogin && (
        <Link className="login" to="/buyer/login">
          Log In
        </Link>
      )}
      {isBuyerLogin && <button onClick={logout}>Logout</button>}
      {isBuyerLogin && <Link to="/buyer/dashboard">Dashboard</Link>}
      {!isBuyerLogin && <Link to="/">Log In As A Coder</Link>}
    </div>
  );
};
