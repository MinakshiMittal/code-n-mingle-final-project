import { CoderSignUpForm, OverlayContainer } from "../../Components";
import "./Coder.css";

export const CoderSignUp = () => {
  return (
    <div className="credentials-container">
      <div class="container right-panel-active" id="container">
        <CoderSignUpForm />
        <OverlayContainer />
      </div>
    </div>
  );
};
