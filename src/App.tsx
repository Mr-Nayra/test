import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TheFooter from "./container/footer/TheFooter";
import Navbar from "./container/header/Navbar";
import About from "./pages/about";
import Home from "./pages/home";
import TopHeader from "./container/header/TopHeader";
import BlogPage from "./pages/blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
