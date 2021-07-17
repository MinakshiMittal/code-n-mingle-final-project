import "./BiddedProjectCard.css";

export const BiddedProjectCard = ({ biddedProject }) => {
  return (
    <>
      <div className="dashboard-bidded-projects-cards-container">
        <div className="bidded-project-card-container-1">
          <div className="bidded-project-list product-name-with-wishlist-icon">
            <h4>{biddedProject.project.name}</h4>
          </div>
          <div className="product-price">
            <p className="current-product-price">
              Bid Price: ₹{biddedProject.bidPriceByCoder}
            </p>
            <p className="current-product-price">
              Bid Delivery Time: {biddedProject.bidDeliveryTimeInDaysByCoder}{" "}
              days
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
