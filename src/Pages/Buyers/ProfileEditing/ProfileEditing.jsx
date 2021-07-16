import {
  BuyerDashBoardSideNav,
  BuyerProfileEditingForm,
  CoderMainNav,
} from "../../../Components";
import "./ProfileEditing.css";

export const ProfileEditing = () => {
  return (
    <>
      <CoderMainNav />
      <div className="coder-dashboard">
        <BuyerDashBoardSideNav />
        <BuyerProfileEditingForm />
      </div>
    </>
  );
};
