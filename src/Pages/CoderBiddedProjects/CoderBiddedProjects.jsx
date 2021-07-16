import {
  CoderDashBoardSideNav,
  CoderMainNav,
  BiddedProjectCard,
} from "../../Components";
import "./CoderBiddedProjects.css";

export const CoderBiddedProjects = () => {
  return (
    <>
      <CoderMainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <div className="all-bidded-projects-container">
          <BiddedProjectCard />
        </div>
      </div>
    </>
  );
};
