import { Routes, Route, Navigate } from "react-router-dom";
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
  CoderDashBoard,
  CoderProfileEditing,
  RouteNotFound,
  CoderProjectUploading,
  CoderUploadedProjects,
  UploadedProjectDisplayPage,
  BuyerGettingStarted,
  BuyerProfileEditing,
  CoderCreateABid,
  CoderBiddedProjects,
  BuyerDashBoard,
  BuyerProjectUploading,
  BuyerUploadedProjects,
  BuyerUploadedProjectDisplayPage,
  CoderReviews,
  BuyerReviews,
  BuyerBiddedProjects,
} from "./Pages";
import { CoderPrivateRoute } from "./Components";
import { useBuyerAuth, useCoderAuth } from "./Context";
import { CurrentProjectDetails } from "./Pages/CurrentProjectDetails/CurrentProjectDetails";

function App() {
  const { isCoderLogin } = useCoderAuth();
  const { isBuyerLogin } = useBuyerAuth();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={isCoderLogin ? <Navigate to="/coder/dashboard" /> : <Home />}
        />
        <Route
          path="available-projects"
          element={<AvailableProjectsListingPage />}
        />
        <Route path="/blogs" element={<BlogPage />} />
        <Route
          path="/categories/:categoryId"
          element={<CategoryWiseAvailableProjectsListingPage />}
        />

        <Route path="/coder/signup" element={<CoderSignUp />} />
        <Route path="/coder/login" element={<CoderLogin />} />
        <CoderPrivateRoute
          path="/project/:projectId/create-a-bid"
          element={<CoderCreateABid />}
        />
        <CoderPrivateRoute
          path="/coder/dashboard"
          element={<CoderDashBoard />}
        />
        <Route
          path="/coder/profile-editing"
          element={<CoderProfileEditing />}
        />
        <Route
          path="/coder/upload-a-project"
          element={<CoderProjectUploading />}
        />
        <Route
          path="/coder/uploaded-projects"
          element={<CoderUploadedProjects />}
        />
        <Route
          path="/coder/uploaded-project/:uploadedProjectId"
          element={<UploadedProjectDisplayPage />}
        />
        <Route
          path="/coder/bidded-projects"
          element={<CoderBiddedProjects />}
        />

        <Route
          path="/buyer"
          element={
            isBuyerLogin ? (
              <Navigate to="/buyer/dashboard" />
            ) : (
              <BuyerGettingStarted />
            )
          }
        />
        <Route path="/buyer/dashboard" element={<BuyerDashBoard />} />
        <Route
          path="/buyer/login"
          element={
            isBuyerLogin ? <Navigate to="/buyer/dashboard" /> : <BuyerLogin />
          }
        />
        <Route
          path="/buyer/signup"
          element={
            isBuyerLogin ? <Navigate to="/buyer/dashboard" /> : <BuyerSignUp />
          }
        />
        <Route
          path="/buyer/profile-editing"
          element={<BuyerProfileEditing />}
        />
        <Route
          path="/buyer/upload-a-project"
          element={<BuyerProjectUploading />}
        />
        <Route
          path="/buyer/uploaded-projects"
          element={<BuyerUploadedProjects />}
        />
        <Route
          path="/buyer/bidded-projects"
          element={<BuyerBiddedProjects />}
        />
        <Route
          path="/buyer/uploaded-project/:uploadedProjectId"
          element={<BuyerUploadedProjectDisplayPage />}
        />
        <Route
          path="/coder/current-project-details"
          element={<CurrentProjectDetails />}
        />
        <Route path="/coder/reviews" element={<CoderReviews />} />
        <Route path="/buyer/reviews" element={<BuyerReviews />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
