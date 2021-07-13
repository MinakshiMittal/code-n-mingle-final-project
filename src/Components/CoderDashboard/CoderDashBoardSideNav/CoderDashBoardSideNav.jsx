import "./CoderDashBoardSideNav.css";
import { Link } from "react-router-dom";

export const CoderDashBoardSideNav = () => {
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
        <li>Uploaded Projects</li>
        <li>Bidded Projects</li>
        <li>Sold Projects</li>
        <li>Completed Projects</li>
        <li>CNM Score</li>
        <li>Buyer Feedback</li>
        <Link to="/available-projects">
          <li>Create A Bid</li>
        </Link>
        <li>Current Project Deatils</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};
