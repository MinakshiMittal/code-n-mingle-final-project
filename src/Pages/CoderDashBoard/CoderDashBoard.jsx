import {
  CoderDashBoardSideNav,
  CoderDashBoardDefaultView,
  CoderMainNav,
} from "../../Components";
import "./CoderDashBoard.css";

export const CoderDashBoard = () => {
  return (
    <>
      <CoderMainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <CoderDashBoardDefaultView />
      </div>
    </>
  );
};
