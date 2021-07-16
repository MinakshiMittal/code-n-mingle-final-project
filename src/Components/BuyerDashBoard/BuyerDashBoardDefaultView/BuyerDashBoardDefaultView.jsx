import "./BuyerDashBoardDefaultView.css";

export const BuyerDashBoardDefaultView = () => {
  return (
    <div className="dashboard-cards-container">
      <div className="dashboard-card-container">
        <div className="card-container-1">
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
      <div className="dashboard-card-container">
        <div className="card-container-2">
          <div className="product-name-with-wishlist-icon">
            <h4 style={{ color: "#28a745" }}>CNM SCORE</h4>
          </div>
          <div className="product-price">
            <p className="current-product-price">₹Price</p>
            <small className="amount-saved">
              Expected delivery within delivery days
            </small>
          </div>
        </div>
      </div>
      <div className="dashboard-card-container">
        <div className="card-container-3">
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
      {/* <div className="dashboard-card-container">
        <div className="card-container-4">
          <div className="product-name-with-wishlist-icon">
            <h4
              style={{
                color: "rgba(219,85,129,.6)",
                padding: " 0 0.8rem 0.8rem 0.8rem",
              }}
            >
              PROJECT DEVELOPMENT STATUS
            </h4>
          </div>
          <ProgressBar
            bgcolor="red"
            completed="30"
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          />
          <div className="product-price">
            <p className="current-product-price"></p>
            <small className="amount-saved"></small>
          </div>
          {/* </div> */}

      {/*
           
           */}
      {/* </div>
      </div> */}
    </div>
  );
};
