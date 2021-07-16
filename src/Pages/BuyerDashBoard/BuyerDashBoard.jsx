import {
  BuyerDashBoardSideNav,
  BuyerDashBoardDefaultView,
  BuyerMainNav,
} from "../../Components";
import "./BuyerDashBoard.css";

export const BuyerDashBoard = () => {
  return (
    <>
      <BuyerMainNav />
      <div className="coder-dashboard">
        <BuyerDashBoardSideNav />
        <BuyerDashBoardDefaultView />
      </div>
    </>
  );
};
