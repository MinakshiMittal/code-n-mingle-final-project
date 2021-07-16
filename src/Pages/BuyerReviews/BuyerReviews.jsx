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
        <h1>Reviews</h1>
        {feedback?.map((review) => {
          return (
            <li>
              <div>{review.review}</div>
              <div>{review.score}/100</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
