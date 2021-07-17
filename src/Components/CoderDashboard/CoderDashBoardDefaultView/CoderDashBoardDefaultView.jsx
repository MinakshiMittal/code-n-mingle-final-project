import "./CoderDashBoardDefaultView.css";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { useCoderAuth } from "../../../Context";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const CoderDashBoardDefaultView = () => {
  const { coderDetails } = useCoderAuth();
  const [cnmScore, setCNMScore] = useState(0);
  const [status, setStatus] = useState(0);
  const [finalizedBidPrice, setFinalizedBidPrice] = useState(0);
  const [finalizedDeliveryTime, setFinalizedDeliveryTime] = useState(0);
  const [currentStatus, setCurrentStatus] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://code-n-mingle-backend.mittalminakshi.repl.co/coder/${coderDetails}`
        );
        console.log(response.data.coder.currentProject.status);
        if (response.status === 200) {
          setCNMScore(response.data.coder.cnmScore);
          setStatus(response.data.coder.currentProject.status);
          setFinalizedBidPrice(
            response.data.coder.currentProject.finalizedBidPriceByCoder
          );
          setFinalizedDeliveryTime(
            response.data.coder.currentProject
              .finalizedBidDeliveryTimeInDaysByCoder
          );
        }
      } catch (error) {
        console.log(error);
      }
    })();
  });

  const statusUpdateHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `https://code-n-mingle-backend.mittalminakshi.repl.co/coder/${coderDetails}/update-status`,
      {
        status: currentStatus,
      }
    );
    setStatus(currentStatus);
  };

  console.log("sta", status);
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
              PROJECT BID DETAILS
            </h4>
          </div>
          <div className="product-price">
            <p className="current-product-price">Project Bid Price: ₹5000</p>
            <p className="current-product-price">
              Project Delivery Time: 5 days
            </p>
          </div>
        </div>
      </div>
      <div className="dashboard-card-container">
        <div className="card-container-2">
          <div
            className="product-name-with-wishlist-icon"
            style={{ flexGrow: 0 }}
          >
            <h4 style={{ color: "#28a745", paddingBottom: 0 }}>CNM SCORE</h4>
          </div>
          <div className="product-price" style={{ justifyContent: "center" }}>
            <p
              className="current-product-price"
              style={{ fontSize: "3rem", color: "#28a745" }}
            >
              {cnmScore}/100
            </p>
            <small className="amount-saved"></small>
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
            <p className="current-product-price">
              Project Bid Price: ₹{finalizedBidPrice}
            </p>
            <p className="current-product-price">
              Project Delivery Time: {finalizedDeliveryTime} days
            </p>
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
            completed={status}
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
          <input
            onChange={(event) => setCurrentStatus(event.target.value)}
            type="number"
            style={{
              width: "40%",
              background: "rgb(219 85 129 / 13%)",
              color: "white",
              borderRadius: "0.8rem",
            }}
            placeholder="Set current status"
          />
          {status !== 100 && (
            <button
              onClick={statusUpdateHandler}
              style={{
                width: "30%",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                background: "#2cb8cb",
                padding: "0.3rem",
                position: "absolute",
                bottom: "0.3rem",
                right: "0.3rem",
              }}
            >
              Update
            </button>
          )}
          {status === 100 && (
            <Link to="/coder/checkout">
              <button
                style={{
                  width: "30%",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  background: "#2cb8cb",
                  padding: "0.3rem",
                  position: "absolute",
                  bottom: "0.3rem",
                  right: "0.3rem",
                }}
              >
                Checkout
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
