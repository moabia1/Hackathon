// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import FlavourBtl from "../components/FlavourBtl";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <HeroCarousel />
      <FlavourBtl />
    </div>
  );
}
