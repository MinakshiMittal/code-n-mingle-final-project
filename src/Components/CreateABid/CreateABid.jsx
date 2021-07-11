import "./CreateABid.css";
import axios from "axios";
import { useCoderAuth } from "../../Context";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CreateABid = () => {
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
    <Link to="/coder/create-a-bid">
      <div className="create-a-bid-modal">
        <h1 className="create-a-bid-modal-heading">Create a Bid</h1>
        <input
          className="bid-price-input"
          type="number"
          placeholder="Enter your bid price"
          onChange={(event) => setBidPrice(event.target.value)}
        />
        <input
          className="bid-delivery-time-input"
          type="number"
          placeholder="Enter delivery time you'll require in days"
          onChange={(event) => setBidDeliveryTimeInDays(event.target.value)}
        />
        <button onClick={bidHandler}>Confirm Bid</button>
      </div>
    </Link>
  );
};
