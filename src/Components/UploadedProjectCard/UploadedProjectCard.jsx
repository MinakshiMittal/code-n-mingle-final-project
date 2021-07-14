export const UploadedProjectCard = ({ uploadedProject }) => {
  return (
    <div className="dashboard-uploaded-projects-cards-container">
      <div className="dashboard-card-container">
        <div className="uploaded-project-card-container-1">
          <div className="product-name-with-wishlist-icon">
            <h4>name</h4>
          </div>
          <div className="product-price">
            <p className="current-product-price">₹Price</p>
            <small className="amount-saved">
              Expected delivery within delivery days
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
