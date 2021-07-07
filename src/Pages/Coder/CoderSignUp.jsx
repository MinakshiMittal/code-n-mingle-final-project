import { CoderSignUpForm, CoderOverlayContainer } from "../../Components";
import "./Coder.css";

export const CoderSignUp = () => {
  return (
    <div className="credentials-container">
      <div className="container right-panel-active" id="container">
        <CoderSignUpForm />
        <CoderOverlayContainer />
      </div>
    </div>
  );
};
