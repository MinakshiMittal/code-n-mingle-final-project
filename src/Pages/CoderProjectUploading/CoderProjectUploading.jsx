import {
  CoderDashBoardSideNav,
  MainNav,
  UploadProject,
} from "../../Components";

export const CoderProjectUploading = () => {
  return (
    <>
      <MainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <UploadProject />
      </div>
    </>
  );
};
