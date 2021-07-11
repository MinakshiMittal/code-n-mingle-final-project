import {
  CoderDashBoardSideNav,
  CoderProfileEditingForm,
} from "../../Components";
import "./CoderProfileEditing.css";

export const CoderProfileEditing = () => {
  return (
    <div className="coder-dashboard">
      <CoderDashBoardSideNav />
      <CoderProfileEditingForm />
    </div>
  );
};
