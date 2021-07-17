import axios from "axios";
import { useState } from "react";
import { useCoderAuth } from "../../../Context";
import "./UploadProject.css";

export const UploadProject = () => {
  const [projectDemoUrl, setProjectDemoUrl] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [bidPrice, setMinimumBidPrice] = useState(0);
  const [projectName, setProjectName] = useState("");
  const { coderDetails } = useCoderAuth();

  console.log("coder details", coderDetails);

  const handleProjectUploading = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `https://code-n-mingle-backend.mittalminakshi.repl.co/coder/${coderDetails}/upload-project`,
      {
        projectDemoUrl,
        projectDescription,
        bidPrice,
        projectName,
      }
    );

    console.log("upload", response);
  };

  return (
    <form className="upload-project">
      <input
        className="project-upload-input"
        placeholder="Enter Project Name"
        onChange={(event) => setProjectName(event.target.value)}
      />
      <input
        className="project-upload-input"
        placeholder="Enter Project Demo Url"
        onChange={(event) => setProjectDemoUrl(event.target.value)}
      />
      <textarea
        className="project-upload-textarea"
        placeholder="Project Description"
        cols="30"
        rows="10"
        onChange={(event) => setProjectDescription(event.target.value)}
      ></textarea>
      <input
        className="project-upload-input"
        placeholder="Enter your bid price"
        type="number"
        onChange={(event) => setMinimumBidPrice(event.target.value)}
      />
      <button
        onClick={handleProjectUploading}
        className="upload-project-button"
      >
        Upload Project
      </button>
    </form>
  );
};
