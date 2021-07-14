import axios from "axios";
import "./CoderUploadedProjects.css";
import { useEffect, useState } from "react";
import {
  CoderDashBoardSideNav,
  MainNav,
  UploadedProjectCard,
} from "../../Components";
import { useCoderAuth, useUploadedProjects } from "../../Context";

export const CoderUploadedProjects = () => {
  const { coderDetails } = useCoderAuth();
  const { uploadedProjects, setUploadedProjects } = useUploadedProjects();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://code-n-mingle-backend.mittalminakshi.repl.co/coder/${coderDetails}/uploaded-projects`
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
  }, [uploadedProjects]);

  console.log("first", uploadedProjects);

  return (
    <>
      <MainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />

        <div className="all-uploaded-projects-container">
          {uploadedProjects?.map((uploadedProject) => {
            console.log(uploadedProject);
            return <UploadedProjectCard uploadedProject={uploadedProject} />;
          })}
        </div>
      </div>
    </>
  );
};
