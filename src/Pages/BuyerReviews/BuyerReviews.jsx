import axios from "axios";
import { useEffect, useState } from "react";
import { BuyerMainNav } from "../../Components";
import { useBuyerAuth } from "../../Context";

export const BuyerReviews = () => {
  const { buyerDetails } = useBuyerAuth();
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://code-n-mingle-backend.mittalminakshi.repl.co/buyer/${buyerDetails}`
        );
        if (response.status === 200) {
          setFeedback(response.data.buyer.feedback);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <BuyerMainNav />
      <ul>
        <h1 style={{ marginTop: "10%", color: "white" }}>Reviews</h1>
        {feedback?.map((review) => {
          return (
            <li
              style={{
                color: "#2cb8cb",
                border: "2px solid #2cb8cb",
                padding: "1rem",
                margin: "1rem",
                listStyle: "decimal-leading-zero",
              }}
            >
              <div style={{ margin: "0.5rem", fontSize: "1.2rem" }}>
                {review.review}
              </div>
              <div
                style={{ margin: "1rem", fontSize: "1.3rem", fontWeight: 900 }}
              >
                {review.score}/100
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
