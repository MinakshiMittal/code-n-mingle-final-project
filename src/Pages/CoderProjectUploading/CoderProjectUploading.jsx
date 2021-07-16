import {
  CoderDashBoardSideNav,
  CoderMainNav,
  UploadProject,
} from "../../Components";

export const CoderProjectUploading = () => {
  return (
    <>
      <CoderMainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <UploadProject />
      </div>
    </>
  );
};
