import { SideNav, ProfileEditingForm, MainNav } from "../../../Components";
import "./ProfileEditing.css";

export const ProfileEditing = () => {
  return (
    <>
      <MainNav />
      <div className="coder-dashboard">
        <SideNav />
        <ProfileEditingForm />
      </div>
    </>
  );
};
