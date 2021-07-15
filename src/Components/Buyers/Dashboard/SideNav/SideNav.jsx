import "./SideNav.css";
import { Link } from "react-router-dom";
import { useCoderAuth } from "../../../../Context";

export const SideNav = () => {
  const { logout } = useCoderAuth();

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
        <li>Uploaded Projects</li>
        <li>Bidded Projects</li>
        <li>Projects In Progress</li>
        <li>Completed Projects</li>
        <li>Bought Projects</li>
        <li>Coder Feedback</li>

        <li>Buy A Project</li>

        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
};
