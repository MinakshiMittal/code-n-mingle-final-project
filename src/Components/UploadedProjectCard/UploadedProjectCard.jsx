import { useNavigate } from "react-router";
import "./UploadedProjectCard.css";

export const UploadedProjectCard = ({ uploadedProject }) => {
  const { projectName, bidPrice, _id } = uploadedProject;
  const navigate = useNavigate();
  return (
    <div
      className="dashboard-uploaded-projects-cards-container"
      onClick={() => navigate(`/coder/uploaded-project/${_id}`)}
    >
      <div className="uploaded-project-card-container-1">
        <div className="uploaded-project-list product-name-with-wishlist-icon">
          <h4>{projectName}</h4>
        </div>
        <div className="product-price">
          <p className="current-product-price">Bid Price: ₹{bidPrice}</p>
          <small className="amount-saved">
            Expected delivery within delivery days
          </small>
        </div>
      </div>
    </div>
  );
};
