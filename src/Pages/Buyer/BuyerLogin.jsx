import {
  BuyerLoginForm,
  BuyerOverlayContainer,
  BuyerMainNav,
} from "../../Components";
import "./Buyer.css";

export const BuyerLogin = () => {
  return (
    <>
      <BuyerMainNav />
      <div className="credentials-container">
        <div class="container" id="container">
          <BuyerLoginForm />
          <BuyerOverlayContainer />
        </div>
      </div>
    </>
  );
};
