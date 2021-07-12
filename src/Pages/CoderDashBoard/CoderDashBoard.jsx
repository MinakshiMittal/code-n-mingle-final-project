import {
  CoderDashBoardSideNav,
  CoderDashBoardDefaultView,
  MainNav,
} from "../../Components";
import "./CoderDashBoard.css";

export const CoderDashBoard = () => {
  return (
    <>
      <MainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <CoderDashBoardDefaultView />
      </div>
    </>
  );
};
