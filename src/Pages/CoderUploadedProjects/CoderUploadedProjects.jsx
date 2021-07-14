import axios from "axios";
import "./CoderUploadedProjects.css";
import { useEffect, useState } from "react";
import {
  CoderDashBoardSideNav,
  MainNav,
  UploadedProjectCard,
} from "../../Components";
import { useCoderAuth } from "../../Context";

export const CoderUploadedProjects = () => {
  const { coderDetails } = useCoderAuth();
  const [coderUploadedProjects, setCoderUploadedProjects] = useState(null);
  useEffect(async () => {
    const response = await axios.get(
      `https://code-n-mingle-backend.mittalminakshi.repl.co/coder/${coderDetails}/uploaded-projects`
    );
    console.log("up", response.data);
    if (response.status === 200) {
      setCoderUploadedProjects(response.data.coderUploadedProjects);
    }
    console.log("coc", coderUploadedProjects);
  }, [coderDetails, coderUploadedProjects]);

  return (
    <>
      <MainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />

        <div className="all-uploaded-projects-container">
          {coderUploadedProjects?.map((uploadedProject) => {
            return <UploadedProjectCard uploadedProject={uploadedProject} />;
          })}
        </div>

        {/* <UploadedProjects /> */}
      </div>
    </>
  );
};
