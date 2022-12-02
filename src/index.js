import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./pages/about_us.js";
import Explore from "./pages/explore.js";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// This is the main render of the website
root.render(
  <StrictMode>
    {/* Handles all of the sites routing */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route exact path="/about_us" element={<AboutUs />} />
        <Route exact path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
