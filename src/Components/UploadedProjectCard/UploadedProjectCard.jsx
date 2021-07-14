import { useNavigate } from "react-router";
import { UploadedProjects } from "../CoderDashboard/UploadedProjects/UploadedProjects";
import "./UploadedProjectCard.css";

export const UploadedProjectCard = ({ uploadedProject, withDetails }) => {
  console.log("card", uploadedProject);
  const navigate = useNavigate();
  return (
    <>
      {!withDetails && (
        <div
          className="dashboard-uploaded-projects-cards-container"
          onClick={() =>
            navigate(`/coder/uploaded-project/${uploadedProject._id}`)
          }
        >
          <div className="uploaded-project-card-container-1">
            <div className="uploaded-project-list product-name-with-wishlist-icon">
              <h4>{uploadedProject.projectName}</h4>
            </div>
            <div className="product-price">
              <p className="current-product-price">
                Bid Price: ₹{uploadedProject.bidPrice}
              </p>
              <small className="amount-saved">
                Expected delivery within delivery days
              </small>
            </div>
          </div>
        </div>
      )}
      {withDetails && <UploadedProjects uploadedProject={uploadedProject} />}
    </>
  );
};
