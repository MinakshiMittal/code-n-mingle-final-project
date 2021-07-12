import {
  CoderDashBoardSideNav,
  CoderProfileEditingForm,
  MainNav,
} from "../../Components";
import "./CoderProfileEditing.css";

export const CoderProfileEditing = () => {
  return (
    <>
      <MainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <CoderProfileEditingForm />
      </div>
    </>
  );
};
