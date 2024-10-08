import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import LeftSideBar from "./components/LeftSideBar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <LeftSideBar />
    </div>
  );
}

export default App;
