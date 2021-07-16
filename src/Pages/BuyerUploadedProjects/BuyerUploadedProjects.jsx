import axios from "axios";
import "./BuyerUploadedProjects.css";
import { useEffect } from "react";
import {
  BuyerDashBoardSideNav,
  BuyerMainNav,
  BuyerUploadedProjectCard,
} from "../../Components";
import { useCoderAuth, useUploadedProjects } from "../../Context";

export const BuyerUploadedProjects = () => {
  const { coderDetails } = useCoderAuth();
  const buyerId = "60edcbe68b91d600258b5d69";
  const { uploadedProjects, setUploadedProjects } = useUploadedProjects();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://code-n-mingle-backend.mittalminakshi.repl.co/coder/${buyerId}/uploaded-projects`
        );
        console.log("up", response.data);
        if (response.status === 200) {
          setUploadedProjects(response.data.coderUploadedProjects);
        }
        console.log("coc", uploadedProjects);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [uploadedProjects, coderDetails, setUploadedProjects]);

  console.log("first", uploadedProjects);

  return (
    <>
      <BuyerMainNav />
      <div className="coder-dashboard">
        <BuyerDashBoardSideNav />

        <div className="all-uploaded-projects-container">
          {uploadedProjects?.map((uploadedProject) => {
            console.log(uploadedProject);
            return (
              <BuyerUploadedProjectCard uploadedProject={uploadedProject} />
            );
          })}
        </div>
      </div>
    </>
  );
};
