import {
  BuyerSignUpForm,
  BuyerOverlayContainer,
  BuyerMainNav,
} from "../../Components";
import "./Buyer.css";

export const BuyerSignUp = () => {
  return (
    <>
      <BuyerMainNav />
      <div className="credentials-container">
        <div class="container right-panel-active" id="container">
          <BuyerSignUpForm />
          <BuyerOverlayContainer />
        </div>
      </div>
    </>
  );
};
