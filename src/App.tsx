import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TheFooter from "./container/footer/TheFooter";
import Navbar from "./container/header/Navbar";
import About from "./pages/about";
import Home from "./pages/home";
import TopHeader from "./container/header/TopHeader";
// import CareRetraining from "./pages/blog-page/CareRetraining";
// import BiasSystems from "./pages/blog-page/BiasSystems";
import DataDrift from "./pages/blog-page/DataDrift ";
import BiasRecommenderSystems from "./pages/blog/BiasRecommenderSystems";
import AboutRetraining from "./pages/blog/AboutRetraining";
import DataDriftDetection from "./pages/blog/DataDriftDetection";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/blog/bias-in-recommendation-systems"
            element={<BiasRecommenderSystems />}
          />
          <Route
            path="/blog/why-do-we-need-to-care-about-retraining"
            element={<AboutRetraining />}
          />
          <Route
            path="/blog/5-great-statistical-methods-for-data-drift-detection"
            element={<DataDriftDetection />}
          />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
