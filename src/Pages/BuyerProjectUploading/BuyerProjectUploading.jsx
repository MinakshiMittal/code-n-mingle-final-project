import {
  BuyerDashBoardSideNav,
  BuyerMainNav,
  BuyerUploadProject,
} from "../../Components";

export const BuyerProjectUploading = () => {
  return (
    <>
      <BuyerMainNav />
      <div className="coder-dashboard">
        <BuyerDashBoardSideNav />
        <BuyerUploadProject />
      </div>
    </>
  );
};
