import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TheFooter from "./container/footer/TheFooter";
import Navbar from "./container/header/Navbar";
import About from "./pages/about";
import Home from "./pages/home";
import TopHeader from "./container/header/TopHeader";
import CareRetraining from "./pages/blog-page/CareRetraining";
import BiasSystems from "./pages/blog-page/BiasSystems";
import DataDrift from "./pages/blog-page/DataDrift ";

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
            element={<BiasSystems />}
          />
          <Route
            path="/blog/why-do-we-need-to-care-about-retraining"
            element={<CareRetraining />}
          />
          <Route
            path="/blog/5-great-statistical-methods-for-data-drift-detection"
            element={<DataDrift />}
          />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
