import {
  BuyerDashBoardSideNav,
  BuyerProfileEditingForm,
  BuyerMainNav,
} from "../../Components";
import "./BuyerProfileEditing.css";

export const BuyerProfileEditing = () => {
  return (
    <>
      <BuyerMainNav />
      <div className="coder-dashboard">
        <BuyerDashBoardSideNav />
        <BuyerProfileEditingForm />
      </div>
    </>
  );
};
