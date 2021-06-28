import {Routes, Route} from "react-router-dom";
import './App.css';
import {Home, AvailableProjectsListingPage, BlogPage} from "./Pages";
import {MainNav} from "./Components";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="available-projects" element={<AvailableProjectsListingPage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
