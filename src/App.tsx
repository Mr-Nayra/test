import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PoweredBy from "./container/footer/PoweredBy";
import TheFooter from "./container/footer/TheFooter";
import Navbar from "./container/header/Navbar";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <PoweredBy />
        <TheFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
