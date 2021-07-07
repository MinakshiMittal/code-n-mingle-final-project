import { BuyerLoginForm, BuyerOverlayContainer } from "../../Components";
import "./Buyer.css";

export const BuyerLogin = () => {
  return (
    <div className="credentials-container">
      <div class="container" id="container">
        <BuyerLoginForm />
        <BuyerOverlayContainer />
      </div>
    </div>
  );
};
