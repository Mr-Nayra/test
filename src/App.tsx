import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TheFooter from "./container/footer/TheFooter";
import Navbar from "./container/header/Navbar";
import About from "./pages/about";
import Home from "./pages/home";
import FirstBlogPage from "./pages/blog-page/FirstBlogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:title" element={<FirstBlogPage />} />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
