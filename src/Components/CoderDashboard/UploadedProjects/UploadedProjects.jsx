import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCoderAuth } from "../../../Context";
import "./UploadedProjects.css";

export const UploadedProjects = () => {
  const { uploadedProjectId } = useParams();
  const [uploadedProject, setUploadedProject] = useState({});
  const { coderDetails } = useCoderAuth();

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(
          `https://code-n-mingle-backend.mittalminakshi.repl.co/coder/${coderDetails}/uploaded-project/${uploadedProjectId}`
        );
        // console.log("page", data);

        if (status === 200) {
          setUploadedProject(data.uploadedProject);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [uploadedProject, coderDetails, uploadedProjectId]);

  return (
    <div className="video-player">
      <div className="uploaded-project-list product-name-with-wishlist-icon">
        <h4>{uploadedProject.projectName}</h4>
      </div>
      <iframe
        className="video-play-screen"
        // style={{ width: "700px", height: "400px" }}
        title="Video"
        src={`https://www.youtube.com/embed/PReWdfg2cM8?rel=0&enablejsapi=1`}
        allow="autoplay"
        allowFullScreen
      ></iframe>
      {/* <video
        src="https://www.youtube.com/embed/lYNwOJeY6_E"
        className="video-play-screen"
        controls
        autoPlay
      ></video> */}
      <div className="bid-price-container">
        Bid Price: ₹{uploadedProject.bidPrice}
      </div>

      <div style={{ color: "white" }}>{uploadedProject.projectDescription}</div>
    </div>
  );
};
