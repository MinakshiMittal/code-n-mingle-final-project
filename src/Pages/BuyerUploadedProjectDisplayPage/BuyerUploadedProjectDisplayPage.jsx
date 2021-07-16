import { BuyerMainNav, BuyerUploadedProjectCard } from "../../Components";
import { useParams } from "react-router";
import { useUploadedProjects } from "../../Context";

export const BuyerUploadedProjectDisplayPage = () => {
  const { uploadedProjectId } = useParams();
  console.log("projectId", uploadedProjectId);
  const { uploadedProjects } = useUploadedProjects();

  const uploadedProject = uploadedProjects?.find(
    (project) => project._id === uploadedProjectId
  );
  console.log("beforepassing", uploadedProject);
  return (
    <>
      <BuyerMainNav />
      <div className="display-project-container"></div>
      <BuyerUploadedProjectCard uploadedProject={uploadedProject} withDetails />
      ;
    </>
  );
};
