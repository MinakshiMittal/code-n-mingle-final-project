import "./CoderCreateABid.css";
import axios from "axios";
import { useCoderAuth } from "../../Context";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CoderCreateABid = () => {
  const { token, coderDetails } = useCoderAuth();
  const navigate = useNavigate();
  const [coder, setCoder] = useState();
  const [bidPrice, setBidPrice] = useState("");
  const [bidDeliveryTimeInDays, setBidDeliveryTimeInDays] = useState("");

  console.log(coderDetails);
  console.log(bidPrice, bidDeliveryTimeInDays);

  const bidHandler = async () => {
    return await axios.post(
      "https://code-n-mingle-backend.mittalminakshi.repl.co/projects/create-a-bid"
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://code-n-mingle-backend.mittalminakshi.repl.co/buyer-projects/create-a-bid",
          { headers: { authorization: token } }
        );
        console.log("res", response);
        // setCoder(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          return navigate("/coder/login");
        }
        setCoder("error");
      }
    })();
  }, [token, navigate]);

  console.log(coder);
  return (
    <>
      <div className="create-a-bid">
        <h1 className="project-name">Project Name</h1>
        <div className="bid-container">
          <img
            className="bidding-project-image"
            src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="project"
          />
          <div className="create-a-bid-container">
            <h2 className="bid-container-title">Create A Bid</h2>
            <input
              className="bidding-input"
              placeholder="Enter your bidding price"
            />
            <input
              className="bidding-input"
              placeholder="Enter your delivery time in days"
            />
            <button className="confirm-bid-button">Confirm Bid</button>
          </div>
        </div>
        <p className="project-bid-price">Project Bid Price</p>
        <p className="project-delivery-time">Project Delivery Days</p>
        <p className="project-category-name">Category Name</p>
        <p className="project-description">Project Description</p>
        <h3 className="what-project-includes-title">What Project Includes</h3>
        <ul className="what-project-includes">
          <li>abcd</li>
          <li>efgh</li>
          <li>jklm</li>
        </ul>
        <h3 className="tech-stack-title">Tech Stack Title</h3>
        <ul className="tech-stack">
          <li>abcd</li>
          <li>efgh</li>
          <li>jklm</li>
        </ul>
      </div>
    </>
    // <div className="create-a-bid-modal">
    //   <h1 className="create-a-bid-modal-heading">Create a Bid</h1>
    //   <input
    //     className="bid-price-input"
    //     type="number"
    //     placeholder="Enter your bid price"
    //     onChange={(event) => setBidPrice(event.target.value)}
    //   />
    //   <input
    //     className="bid-delivery-time-input"
    //     type="number"
    //     placeholder="Enter delivery time you'll require in days"
    //     onChange={(event) => setBidDeliveryTimeInDays(event.target.value)}
    //   />
    //   <button onClick={bidHandler}>Confirm Bid</button>
    // </div>
    // </Link>
  );
};
