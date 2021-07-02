import { CoderLoginForm, OverlayContainer } from "../../Components";
import "./Coder.css";

export const CoderLogin = () => {
  return (
    <div className="credentials-container">
      <div class="container" id="container">
        <CoderLoginForm />
        <OverlayContainer />
      </div>
    </div>
  );
};
