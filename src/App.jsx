import {Routes, Route} from "react-router-dom";
import './App.css';
import {Home, AvailableProjectsListingPage, BlogPage, CategoryWiseAvailableProjectsListingPage} from "./Pages";
import {MainNav} from "./Components";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="available-projects" element={<AvailableProjectsListingPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/categories/:categoryId" element={<CategoryWiseAvailableProjectsListingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
