import { SideNav, DefaultView, MainNav } from "../../../Components";
import "./DashBoard.css";

export const DashBoard = () => {
  return (
    <>
      <MainNav />
      <div className="coder-dashboard">
        <SideNav />
        <DefaultView />
      </div>
    </>
  );
};
