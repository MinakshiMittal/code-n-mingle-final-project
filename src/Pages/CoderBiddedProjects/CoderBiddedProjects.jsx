import {
  CoderDashBoardSideNav,
  MainNav,
  BiddedProjectCard,
} from "../../Components";
import "./CoderBiddedProjects.css";

export const CoderBiddedProjects = () => {
  return (
    <>
      <MainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <div className="all-bidded-projects-container">
          <BiddedProjectCard />
        </div>
      </div>
    </>
  );
};
