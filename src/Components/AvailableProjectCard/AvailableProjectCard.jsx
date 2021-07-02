import "./AvailableProjectCard.css";
import { useNavigate } from "react-router-dom";

export const AvailableProjectCard = ({ availableProject }) => {
  const navigate = useNavigate();

  return (
    <div className="available-project-card-container">
      <div className="card-container">
        <img
          className="project-image"
          src={availableProject.imageUrl}
          alt="project"
        />
        <div className="product-name-with-wishlist-icon">
          <h4>{availableProject.name}</h4>
          <i className="fas fa-heart"></i>
        </div>
        <div className="product-price">
          <p className="current-product-price">
            ₹{availableProject.minBidPrice}
          </p>
          <small className="amount-saved">
            Expected delivery within {availableProject.deliveryTimeInDays} days
          </small>
        </div>
        <button
          className="button primary-btn"
          onClick={() => navigate(`/project/create-a-bid`)}
        >
          CREATE A BID
        </button>
      </div>
    </div>
  );
};
