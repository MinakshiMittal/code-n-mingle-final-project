import { useNavigate } from "react-router";
import { CategoriesListing, HowWeWork, MainNav } from "../../Components";
import "./Home.css";

export const Home = () => {
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

          {/* <div className="search"> */}
          {/* <p className="landing-image-text">
              Find perfect freelance projects to build and get paid for your
              work
            </p> */}
          {/* <div>
              <input
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  width: "80%",
                  padding: "0.95rem",
                  borderRadius: "0.5rem",
                  fontSize: "1.1rem",
                }}
                type="text"
                placeholder="Search"
              />
              <button
                style={{
                  padding: "1.09rem",
                  color: "red",
                  position: "absolute",
                  right: 0,
                }}
              >
                Search
              </button>
            </div> */}
          {/* </div> */}
        </div>
        <div className="text-container">
          <p className="get-paid-text">Get paid for your work</p>
          <p className="description-text">
            <span className="styled-text">
              Finding paid work in college is hard.
            </span>
            <br /> Most students work for free to get experience & build a
            portfolio. Code-n-Mingle brings paid projects right to your inbox.
          </p>
        </div>
        <button
          className="getting-started"
          onClick={() => navigate("/coder/login")}
        >
          Get Started - It's free
        </button>
        <CategoriesListing />
        <HowWeWork />
      </div>
    </>
  );
};
