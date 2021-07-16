import {
  CoderDashBoardSideNav,
  CoderProfileEditingForm,
  CoderMainNav,
} from "../../Components";
import "./CoderProfileEditing.css";

export const CoderProfileEditing = () => {
  return (
    <>
      <CoderMainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <CoderProfileEditingForm />
      </div>
    </>
  );
};
