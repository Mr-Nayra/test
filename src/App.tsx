import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TheFooter from "./container/footer/TheFooter";
import Navbar from "./container/header/Navbar";
import Home from "./pages/home";
import TopHeader from "./container/header/TopHeader";
import BlogPage from "./pages/blog";
import BlogRoot from "./pages/blog/blog-page/BlogRoot";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogRoot />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
