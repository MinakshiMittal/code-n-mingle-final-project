import { CategoriesListing, HowWeWork } from "../../Components";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-page">
      <div
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
        <div className="search">
          <p className="landing-image-text">
            Find perfect freelance projects to build and get paid for your work
          </p>
          <div>
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
          </div>
        </div>
      </div>
      <CategoriesListing />
      <HowWeWork />
    </div>
  );
};
