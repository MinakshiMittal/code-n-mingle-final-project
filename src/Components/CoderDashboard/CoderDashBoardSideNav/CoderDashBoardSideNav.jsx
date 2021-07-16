import "./CoderDashBoardSideNav.css";
import { Link } from "react-router-dom";
import { useCoderAuth } from "../../../Context";

export const CoderDashBoardSideNav = () => {
  const { logout } = useCoderAuth();

  return (
    <div className="coder-side-nav">
      <ul className="nav-menu-list">
        <Link to="/coder/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/coder/profile-editing">
          <li>Edit Profile</li>
        </Link>
        <Link to="/coder/upload-a-project">
          <li>Upload A Project</li>
        </Link>
        <Link to="/coder/uploaded-projects">
          <li>Uploaded Projects</li>
        </Link>
        <Link to="/coder/bidded-projects">
          <li>Bidded Projects</li>
        </Link>
        {/* <li>Completed Projects</li> */}
        <Link to="/coder/reviews">
          <li>Reviews</li>
        </Link>
        <Link to="/available-projects">
          <li>Create A Bid</li>
        </Link>
        <Link to="/coder/current-project-details">
          <li>Current Project Details</li>
        </Link>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
};
