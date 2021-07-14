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
} from "./Pages";
import { CoderPrivateRoute, CreateABid } from "./Components";
import { useCoderAuth } from "./Context";

function App() {
  const { isCoderLogin } = useCoderAuth();
  console.log("lo", isCoderLogin);
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
        <Route path="/buyer/login" element={<BuyerLogin />} />
        <Route path="/buyer/signup" element={<BuyerSignUp />} />
        <Route path="/coder/signup" element={<CoderSignUp />} />
        <Route path="/coder/login" element={<CoderLogin />} />
        <CoderPrivateRoute
          path="/project/create-a-bid"
          element={<CreateABid />}
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
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
