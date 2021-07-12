import {
  BuyerLoginForm,
  BuyerOverlayContainer,
  MainNav,
} from "../../Components";
import "./Buyer.css";

export const BuyerLogin = () => {
  return (
    <>
      <MainNav />
      <div className="credentials-container">
        <div class="container" id="container">
          <BuyerLoginForm />
          <BuyerOverlayContainer />
        </div>
      </div>
    </>
  );
};
