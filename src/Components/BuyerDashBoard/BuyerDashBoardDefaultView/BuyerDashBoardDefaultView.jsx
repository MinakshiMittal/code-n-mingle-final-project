import axios from "axios";
import { useEffect, useState } from "react";
import { useBuyerAuth } from "../../../Context";
import "./BuyerDashBoardDefaultView.css";

export const BuyerDashBoardDefaultView = () => {
  const { buyerDetails } = useBuyerAuth();
  const [cnmScore, setCNMScore] = useState(0);
  const [projectsInProgressId, setProjectsInProgressId] = useState(null);
  const [projectsInProgress, setProjectsInProgress] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://code-n-mingle-backend.mittalminakshi.repl.co/buyer/${buyerDetails}`
        );

        if (response.status === 200) {
          setCNMScore(response.data.buyer.cnmScore);
          setProjectsInProgressId(response.data.buyer.projectsInProgress);
        }
      } catch (error) {
        console.log(error);
      }

      const { data } = await axios.get(
        `https://code-n-mingle.backend.mittalminakshi.repl.co/buyer/available-projects/${projectsInProgressId}`
      );

      console.log(data);
    })();
  });

  return (
    <div className="dashboard-cards-container">
      <div className="dashboard-card-container">
        <div className="card-container-1">
          <div className="product-name-with-wishlist-icon">
            <h4>PROJECTS IN PROGRESS LIST</h4>
          </div>
          <div className="product-price">
            <p className="current-product-price"></p>

            <p className="current-product-price">Bid Price: ₹Price</p>
            <p className="current-product-price">Bid DeliveryTime: days</p>
            <p className="current-product-price">
              Finalized Bidding Price: ₹Price
            </p>
            <p className="current-product-price">Finalized Delivery Time: </p>

            <small className="amount-saved">
              Expected delivery within delivery days
            </small>
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
          <div className="product-name-with-wishlist-icon">
            <h4>name</h4>
          </div>
          <div className="product-price">
            <p className="current-product-price">90/100</p>
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
