import "./CurrentProjectDetails.css";
import axios from "axios";
import { useCoderAuth } from "../../Context";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CurrentProjectDetails = () => {
  const projectId = "60d978ca2045a701fcfd2416";
  const { token } = useCoderAuth();
  const navigate = useNavigate();
  const [bidPriceByCoder, setBidPrice] = useState(0);
  const [bidDeliveryTimeInDaysByCoder, setBidDeliveryTimeInDays] = useState();
  const [project, setProjects] = useState({});

  const bidHandler = async (event) => {
    event.preventDefault();
    return await axios.post(
      "https://code-n-mingle-backend.mittalminakshi.repl.co/buyer-projects/create-a-bid",
      {
        project: projectId,
        bidPriceByCoder,
        bidDeliveryTimeInDaysByCoder,
      },
      {
        headers: { authorization: token },
      }
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://code-n-mingle-backend.mittalminakshi.repl.co/available-projects/${projectId}`
        );
        console.log(response);
        if (response.status === 200) {
          setProjects(response.data.project);
        }
      } catch (error) {
        if (error.response.status === 401) {
          return navigate("/coder/login");
        }
      }
    })();
  }, [navigate, setProjects, projectId]);

  const {
    name,
    category,
    deliveryTimeInDays,
    description,
    imageUrl,
    minBidPrice,
    techStack,
    whatProjectIncludes,
  } = project;

  return (
    <>
      <div className="create-a-bid">
        <h1 className="project-name">{name}</h1>
        <div className="bid-container">
          <img className="bidding-project-image" src={imageUrl} alt="project" />
          <div className="create-a-bid-container">
            <h2 className="bid-container-title">Your Bid Details</h2>
            <input
              value="₹9000"
              className="bidding-input"
              type="text"
              placeholder="Enter your bidding price"
            />
            <input
              value="9 days"
              type="text"
              className="bidding-input"
              placeholder="Enter your delivery time in days"
            />
            {/* <button className="confirm-bid-button" onClick={bidHandler}>
              Confirm Bid
            </button> */}
          </div>
        </div>
        <p className="project-bid-price">Project Bid Price: ₹{minBidPrice} </p>
        <p className="project-delivery-time">
          Project Delivery Days: {deliveryTimeInDays}
        </p>
        <p className="project-category-name">Category: {category}</p>
        <p className="project-description">{description}</p>
        <h3 className="what-project-includes-title">What Project Includes</h3>
        <ul className="what-project-includes">
          {whatProjectIncludes?.map((detail) => {
            return <li>{detail}</li>;
          })}
        </ul>
        <h3 className="tech-stack-title">Tech Stack Title</h3>
        <ul className="tech-stack">
          {techStack?.map((tech) => {
            return <li>{tech}</li>;
          })}
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
