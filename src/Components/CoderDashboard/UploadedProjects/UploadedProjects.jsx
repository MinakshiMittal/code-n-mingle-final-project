import axios from "axios";
import { useEffect } from "react";
import { useCoderAuth } from "../../../Context";
import "./UploadedProjects.css";

export const UploadedProjects = () => {
  const { coderDetails } = useCoderAuth();

  useEffect(async () => {
    const response = await axios.get(
      `https://code-n-mingle-backend.mittalminakshi.repl.co/coder/${coderDetails}/uploaded-projects`
    );

    console.log("uploaded", response.data.coderUploadedProjects);
  });

  return (
    <div className="video-player">
      <div className="uploaded-project-list product-name-with-wishlist-icon">
        <h4>{projectName}</h4>
      </div>
      <video
        src="https://vod-progressive.akamaized.net/exp=1626213331~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4909%2F21%2F549547533%2F2605682014.mp4~hmac=7d49c624c96abfcb38eb71e5ae21fe0aa1e4b6b9d760476c84439ef436816331/vimeo-prod-skyfire-std-us/01/4909/21/549547533/2605682014.mp4?filename=Sand+-+73847.mp4"
        className="video-play-screen"
        controls
        autoplay
      ></video>
    </div>
  );
};
