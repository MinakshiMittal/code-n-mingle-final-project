import {
  CoderDashBoardSideNav,
  CoderDashBoardDefaultView,
} from "../../Components";
import "./CoderDashBoard.css";

export const CoderDashBoard = () => {
  return (
    <div className="coder-dashboard">
      <CoderDashBoardSideNav />
      <CoderDashBoardDefaultView />
    </div>
  );
};
