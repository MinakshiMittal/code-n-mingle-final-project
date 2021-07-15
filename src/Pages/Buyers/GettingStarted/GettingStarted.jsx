import { useNavigate } from "react-router";
import { MainNav } from "../../../Components";
import "./GettingStarted.css";

export const GettingStarted = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainNav />
      <div className="home-page">
        <div
          className="image-container"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="home-page-cover-img"
            src="https://cdn.pixabay.com/photo/2018/12/10/02/14/manhattan-3866140_1280.jpg"
            alt="cover img"
          />
          <div className="text-overlay"></div>
        </div>
        <div className="text-container">
          <p className="get-paid-text">Hire Freelancers in India</p>
          <p className="description-text">
            <span className="styled-text">
              Finding talented freelancers is difficult.
            </span>
            <br /> At Code-n-Mingle, we put motivated, hard-working coders to
            work on your project.
          </p>
        </div>
        <button
          className="getting-started"
          onClick={() => navigate("/buyer/login")}
        >
          Get Started - It's free
        </button>
        {/* <CategoriesListing />
        <HowWeWork /> */}
      </div>
    </>
  );
};
