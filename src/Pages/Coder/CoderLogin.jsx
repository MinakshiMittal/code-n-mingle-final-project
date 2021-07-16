import {
  CoderLoginForm,
  CoderOverlayContainer,
  CoderMainNav,
} from "../../Components";
import "./Coder.css";

export const CoderLogin = () => {
  return (
    <>
      <CoderMainNav />
      <div className="credentials-container">
        <div className="container" id="container">
          <CoderLoginForm />
          <CoderOverlayContainer />
        </div>
      </div>
    </>
  );
};
