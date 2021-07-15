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
  GettingStarted,
  ProfileEditing,
  CoderCreateABid,
  CoderBiddedProjects,
} from "./Pages";
import { CoderPrivateRoute } from "./Components";
import { useBuyerAuth, useCoderAuth } from "./Context";
import { DashBoard } from "./Pages/Buyers/DashBoard/DashBoard";

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
              <GettingStarted />
            )
          }
        />
        <Route path="/buyer/dashboard" element={<DashBoard />} />
        <Route path="/buyer/login" element={<BuyerLogin />} />
        <Route path="/buyer/signup" element={<BuyerSignUp />} />
        <Route path="/buyer/profile-editing" element={<ProfileEditing />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
