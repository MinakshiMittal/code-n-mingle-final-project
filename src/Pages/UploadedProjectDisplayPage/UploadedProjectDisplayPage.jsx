import {
  MainNav,
  // UploadedProjectDetails,
  UploadedProjectCard,
} from "../../Components";
import { useParams } from "react-router";
import { useUploadedProjects } from "../../Context";

export const UploadedProjectDisplayPage = () => {
  const { uploadedProjectId } = useParams();
  console.log("projectId", uploadedProjectId);
  const { uploadedProjects } = useUploadedProjects();

  const uploadedProject = uploadedProjects?.find(
    (project) => project._id === uploadedProjectId
  );
  console.log("beforepassing", uploadedProject);
  return (
    <>
      <MainNav />
      <div className="display-project-container"></div>
      <UploadedProjectCard uploadedProject={uploadedProject} withDetails />;
    </>
  );
};
