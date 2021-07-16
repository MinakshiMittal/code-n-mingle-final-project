import "./CoderDashBoardDefaultView.css";
import { ProgressBar } from "../../ProgressBar/ProgressBar";

export const CoderDashBoardDefaultView = () => {
  return (
    <div className="dashboard-cards-container">
      <div className="dashboard-card-container">
        <div className="card-container-1">
          <div className="dashboard-cards">
            <h4
              style={{
                color: "white",
                padding: " 0 0.8rem 0.8rem 0.8rem",
                fontSize: "1.3rem",
              }}
            >
              PROJECT NAME
            </h4>
          </div>
          <div className="product-price">
            <p className="current-product-price">Project Bid Price: ₹5000</p>
            <p className="current-product-price">Project Delivery Time: 5</p>
          </div>
        </div>
      </div>
      <div className="dashboard-card-container">
        <div className="card-container-2">
          <div className="dashboard-cards">
            <h4
              style={{
                color: "white",
                padding: " 0 0.8rem 0.8rem 0.8rem",
                fontSize: "1.3rem",
              }}
            >
              CNM SCORE
            </h4>
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
          <div className="dashboard-cards">
            <h4
              style={{
                color: "white",
                padding: " 0 0.8rem 0.8rem 0.8rem",
                fontSize: "1.3rem",
              }}
            >
              FINALIZED BIDDING DETAILS
            </h4>
          </div>
          <div className="product-price">
            <p className="current-product-price">Project Bid Price: ₹5000</p>
            <p className="current-product-price">Project Delivery Time: 5</p>
          </div>
        </div>
      </div>
      <div className="dashboard-card-container">
        <div className="card-container-4">
          <div className="dashboard-cards">
            <h4
              style={{
                color: "white",
                padding: " 0 0.8rem 0.8rem 0.8rem",
                fontSize: "1.3rem",
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
          <button
            style={{
              width: "40%",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              background: "#2cb8cb",
              padding: "0.3rem",
              position: "absolute",
              bottom: "0.3rem",
              right: "0.3rem",
            }}
          >
            Update status
          </button>
        </div>
      </div>
    </div>
  );
};
