import { CoderLoginForm, CoderOverlayContainer } from "../../Components";
import "./Coder.css";

export const CoderLogin = () => {
  return (
    <div className="credentials-container">
      <div className="container" id="container">
        <CoderLoginForm />
        <CoderOverlayContainer />
      </div>
    </div>
  );
};
