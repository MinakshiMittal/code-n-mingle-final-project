import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  AvailableProjectsListingPage,
  BlogPage,
  CategoryWiseAvailableProjectsListingPage,
  BuyerLogin,
  BuyerSignUp,
  CoderLogin,
  CoderSignUp,
  ProjectBiddingPage,
} from "./Pages";
import { MainNav } from "./Components";
import { PrivateRoute } from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="available-projects"
          element={<AvailableProjectsListingPage />}
        />
        <Route path="/blogs" element={<BlogPage />} />
        <Route
          path="/categories/:categoryId"
          element={<CategoryWiseAvailableProjectsListingPage />}
        />
        <Route path="/buyer/login" element={<BuyerLogin />} />
        <Route path="/buyer/signup" element={<BuyerSignUp />} />
        <Route path="/coder/signup" element={<CoderSignUp />} />
        <Route path="/coder/login" element={<CoderLogin />} />
        <PrivateRoute
          path="/project/create-a-bid"
          element={<ProjectBiddingPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
