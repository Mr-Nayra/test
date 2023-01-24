import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TheFooter from "./container/footer/TheFooter";
import Navbar from "./container/header/Navbar";
import About from "./pages/about";
import Home from "./pages/home";
import FirstBlogPage from "./pages/blog-page/FirstBlogPage";
import SecondBlogPage from "./pages/blog-page/SecondBlogPage";
import ThirdBlogPage from "./pages/blog-page/ThirdBlogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/blog/bias-in-recommendation-systems"
            element={<SecondBlogPage />}
          />
          <Route
            path="/blog/why-do-we-need-to-care-about-retraining"
            element={<FirstBlogPage />}
          />
          <Route
            path="/blog/5-great-statistical-methods-for-data-drift-detection"
            element={<ThirdBlogPage />}
          />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
