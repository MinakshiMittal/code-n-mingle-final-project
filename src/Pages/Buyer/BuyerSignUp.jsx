import {
  BuyerSignUpForm,
  BuyerOverlayContainer,
  MainNav,
} from "../../Components";
import "./Buyer.css";

export const BuyerSignUp = () => {
  return (
    <>
      <MainNav />
      <div className="credentials-container">
        <div class="container right-panel-active" id="container">
          <BuyerSignUpForm />
          <BuyerOverlayContainer />
        </div>
      </div>
    </>
  );
};
