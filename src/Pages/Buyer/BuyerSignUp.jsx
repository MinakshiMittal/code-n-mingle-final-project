import { BuyerSignUpForm, OverlayContainer } from "../../Components";
import "./Buyer.css";

export const BuyerSignUp = () => {
  return (
    <div className="credentials-container">
      <div class="container right-panel-active" id="container">
        <BuyerSignUpForm />
        <OverlayContainer />
      </div>
    </div>
  );
};
