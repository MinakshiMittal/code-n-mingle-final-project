import "./BiddedProjectCard.css";

export const BiddedProjectCard = () => {
  return (
    <>
      <div className="dashboard-bidded-projects-cards-container">
        <div className="bidded-project-card-container-1">
          <div className="bidded-project-list product-name-with-wishlist-icon">
            <h4>Project Name</h4>
          </div>
          <div className="product-price">
            <p className="current-product-price">Bid Price: ₹Bid Price</p>
            <small className="amount-saved">
              Expected delivery within delivery days
            </small>
          </div>
        </div>
      </div>
    </>
  );
};
