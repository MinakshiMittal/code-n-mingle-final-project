import {
  CoderDashBoardSideNav,
  MainNav,
  UploadedProjects,
} from "../../Components";

export const CoderUploadedProjects = () => {
  return (
    <>
      <MainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <UploadedProjects />
      </div>
    </>
  );
};
