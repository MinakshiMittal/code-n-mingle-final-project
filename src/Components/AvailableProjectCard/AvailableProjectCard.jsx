import "./AvailableProjectCard.css";

export const AvailableProjectCard = ({availableProject}) => {
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
            <p className="current-product-price">₹{availableProject.minBidPrice}</p>
            <small className="amount-saved">Expected delivery within {availableProject.deliveryTimeInDays} days</small>
          </div>
          <button className="button primary-btn">CREATE A BID</button>
        </div>
      </div>
    
  );
};
