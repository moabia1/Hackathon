// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import FlavourBtl from "../components/FlavourBtl";
import FokusFeatureSection from "../components/FokusFeatureSection";
import FokusMarquee from "../components/FokusMarquee";
import KnowFokusSection from "../components/KnowFokusSection";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";
import WhyWeAreBest from "../components/WhyWeAreBest";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasLoadedOnce");
    if (hasVisited) {
      setLoaded(false);
    }
  }, []);

  const handleLoadingFinish = () => {
    localStorage.setItem("hasLoadedOnce", "true");
    setLoaded(true);
  };
  return (
    <div className="relative pt-20">
      {!loaded && <LoadingScreen onFinish={handleLoadingFinish} />}
      <Navbar />
      <HeroCarousel />
      <FlavourBtl />
      <FokusFeatureSection />
      <FokusMarquee />
      <WhyWeAreBest/>
      <KnowFokusSection />
      <Footer/>
    </div>
  );
}
