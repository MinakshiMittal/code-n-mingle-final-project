import {
  CoderSignUpForm,
  CoderOverlayContainer,
  MainNav,
} from "../../Components";
import "./Coder.css";

export const CoderSignUp = () => {
  return (
    <>
      <MainNav />
      <div className="credentials-container">
        <div className="container right-panel-active" id="container">
          <CoderSignUpForm />
          <CoderOverlayContainer />
        </div>
      </div>
    </>
  );
};
