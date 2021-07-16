import "./BuyerDashBoardSideNav.css";
import { Link } from "react-router-dom";
import { useBuyerAuth } from "../../../Context";

export const BuyerDashBoardSideNav = () => {
  const { logout } = useBuyerAuth();

  return (
    <div className="coder-side-nav">
      <ul className="nav-menu-list">
        <Link to="/buyer/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/buyer/profile-editing">
          <li>Edit Profile</li>
        </Link>
        <Link to="/buyer/upload-a-project">
          <li>Upload A Project</li>
        </Link>
        <Link to="/buyer/uploaded-projects">
          <li>Uploaded Projects</li>
        </Link>
        <li>Bidded Projects</li>
        <li>Projects In Progress</li>
        <li>Completed Projects</li>
        <li>Bought Projects</li>
        <Link to="/buyer/reviews">
          <li>Reviews</li>
        </Link>

        <li>Buy A Project</li>

        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
};
