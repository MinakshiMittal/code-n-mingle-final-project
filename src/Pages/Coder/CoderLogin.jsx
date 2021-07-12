import {
  CoderLoginForm,
  CoderOverlayContainer,
  MainNav,
} from "../../Components";
import "./Coder.css";

export const CoderLogin = () => {
  return (
    <>
      <MainNav />
      <div className="credentials-container">
        <div className="container" id="container">
          <CoderLoginForm />
          <CoderOverlayContainer />
        </div>
      </div>
    </>
  );
};
